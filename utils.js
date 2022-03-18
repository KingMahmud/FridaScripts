global.Helpers = class {
    static getMatched(array, property, must_contain) {
        const matched = [];
        for (const value of array) {
            if (must_contain.every(str => value[property].includes(str))) {
                matched.push(value);
            }
        }
        return matched;
    }

    static getSpecificClassLoader(must_contain) {
        for (const loader of Java.enumerateClassLoadersSync()) {
            try {
                loader.findClass(must_contain);
                return loader;
            } catch (e) {
                // ignore and continue
                continue;
            }
        }
        throw new Error(`${must_contain} not found in any classloader`);
    }

    static onLibraryLoad(library_name, callback) {
        Interceptor.attach(Module.findExportByName(null, "android_dlopen_ext"), {
            onEnter: function(args) {
                let library_path = args[0].readCString();
                if (library_path.includes(library_name)) {
                    this.library_loaded = true;
                }
            },
            onLeave: function(retval) {
                if (this.library_loaded) {
                    console.log(`[*] Library loaded : ${library_name}`);
                    console.log("[*] Executing callback");
                    callback();
                    console.log("[*] Callback executed");
                }
            }
        });
    }
};