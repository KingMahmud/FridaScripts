// Created by Mahmud. Thanks to MrMax(Github : https://github.com/MohamedX99) for helping.
// Helpers.js used.

// Only for Android usage, if anyone needs to use for other platform i hope you can manage to make it compatible ;)
// Send a PR as well :D

const library_name = "lib<whatever>.so";

Helpers.onLibraryLoad(library_name, (module) => {

    /*
    typedef enum {
        MBEDTLS_CIPHER_NONE = 0,              Placeholder to mark the end of cipher-pair lists. 
        MBEDTLS_CIPHER_NULL,                  The identity stream cipher. 
        MBEDTLS_CIPHER_AES_128_ECB,           AES cipher with 128-bit ECB mode. 
        MBEDTLS_CIPHER_AES_192_ECB,           AES cipher with 192-bit ECB mode. 
        MBEDTLS_CIPHER_AES_256_ECB,           AES cipher with 256-bit ECB mode. 
        MBEDTLS_CIPHER_AES_128_CBC,           AES cipher with 128-bit CBC mode. 
        MBEDTLS_CIPHER_AES_192_CBC,           AES cipher with 192-bit CBC mode. 
        MBEDTLS_CIPHER_AES_256_CBC,           AES cipher with 256-bit CBC mode. 
        MBEDTLS_CIPHER_AES_128_CFB128,        AES cipher with 128-bit CFB128 mode. 
        MBEDTLS_CIPHER_AES_192_CFB128,        AES cipher with 192-bit CFB128 mode. 
        MBEDTLS_CIPHER_AES_256_CFB128,        AES cipher with 256-bit CFB128 mode. 
        MBEDTLS_CIPHER_AES_128_CTR,           AES cipher with 128-bit CTR mode. 
        MBEDTLS_CIPHER_AES_192_CTR,           AES cipher with 192-bit CTR mode. 
        MBEDTLS_CIPHER_AES_256_CTR,           AES cipher with 256-bit CTR mode. 
        MBEDTLS_CIPHER_AES_128_GCM,           AES cipher with 128-bit GCM mode. 
        MBEDTLS_CIPHER_AES_192_GCM,           AES cipher with 192-bit GCM mode. 
        MBEDTLS_CIPHER_AES_256_GCM,           AES cipher with 256-bit GCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_ECB,      Camellia cipher with 128-bit ECB mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_ECB,      Camellia cipher with 192-bit ECB mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_ECB,      Camellia cipher with 256-bit ECB mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_CBC,      Camellia cipher with 128-bit CBC mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_CBC,      Camellia cipher with 192-bit CBC mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_CBC,      Camellia cipher with 256-bit CBC mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_CFB128,   Camellia cipher with 128-bit CFB128 mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_CFB128,   Camellia cipher with 192-bit CFB128 mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_CFB128,   Camellia cipher with 256-bit CFB128 mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_CTR,      Camellia cipher with 128-bit CTR mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_CTR,      Camellia cipher with 192-bit CTR mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_CTR,      Camellia cipher with 256-bit CTR mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_GCM,      Camellia cipher with 128-bit GCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_GCM,      Camellia cipher with 192-bit GCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_GCM,      Camellia cipher with 256-bit GCM mode. 
        MBEDTLS_CIPHER_DES_ECB,               DES cipher with ECB mode. 
        MBEDTLS_CIPHER_DES_CBC,               DES cipher with CBC mode. 
        MBEDTLS_CIPHER_DES_EDE_ECB,           DES cipher with EDE ECB mode. 
        MBEDTLS_CIPHER_DES_EDE_CBC,           DES cipher with EDE CBC mode. 
        MBEDTLS_CIPHER_DES_EDE3_ECB,          DES cipher with EDE3 ECB mode. 
        MBEDTLS_CIPHER_DES_EDE3_CBC,          DES cipher with EDE3 CBC mode. 
        MBEDTLS_CIPHER_AES_128_CCM,           AES cipher with 128-bit CCM mode. 
        MBEDTLS_CIPHER_AES_192_CCM,           AES cipher with 192-bit CCM mode. 
        MBEDTLS_CIPHER_AES_256_CCM,           AES cipher with 256-bit CCM mode. 
        MBEDTLS_CIPHER_AES_128_CCM_STAR_NO_TAG,  AES cipher with 128-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_AES_192_CCM_STAR_NO_TAG,  AES cipher with 192-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_AES_256_CCM_STAR_NO_TAG,  AES cipher with 256-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_CCM,      Camellia cipher with 128-bit CCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_CCM,      Camellia cipher with 192-bit CCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_CCM,      Camellia cipher with 256-bit CCM mode. 
        MBEDTLS_CIPHER_CAMELLIA_128_CCM_STAR_NO_TAG,  Camellia cipher with 128-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_CAMELLIA_192_CCM_STAR_NO_TAG,  Camellia cipher with 192-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_CAMELLIA_256_CCM_STAR_NO_TAG,  Camellia cipher with 256-bit CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_ARIA_128_ECB,          Aria cipher with 128-bit key and ECB mode. 
        MBEDTLS_CIPHER_ARIA_192_ECB,          Aria cipher with 192-bit key and ECB mode. 
        MBEDTLS_CIPHER_ARIA_256_ECB,          Aria cipher with 256-bit key and ECB mode. 
        MBEDTLS_CIPHER_ARIA_128_CBC,          Aria cipher with 128-bit key and CBC mode. 
        MBEDTLS_CIPHER_ARIA_192_CBC,          Aria cipher with 192-bit key and CBC mode. 
        MBEDTLS_CIPHER_ARIA_256_CBC,          Aria cipher with 256-bit key and CBC mode. 
        MBEDTLS_CIPHER_ARIA_128_CFB128,       Aria cipher with 128-bit key and CFB-128 mode. 
        MBEDTLS_CIPHER_ARIA_192_CFB128,       Aria cipher with 192-bit key and CFB-128 mode. 
        MBEDTLS_CIPHER_ARIA_256_CFB128,       Aria cipher with 256-bit key and CFB-128 mode. 
        MBEDTLS_CIPHER_ARIA_128_CTR,          Aria cipher with 128-bit key and CTR mode. 
        MBEDTLS_CIPHER_ARIA_192_CTR,          Aria cipher with 192-bit key and CTR mode. 
        MBEDTLS_CIPHER_ARIA_256_CTR,          Aria cipher with 256-bit key and CTR mode. 
        MBEDTLS_CIPHER_ARIA_128_GCM,          Aria cipher with 128-bit key and GCM mode. 
        MBEDTLS_CIPHER_ARIA_192_GCM,          Aria cipher with 192-bit key and GCM mode. 
        MBEDTLS_CIPHER_ARIA_256_GCM,          Aria cipher with 256-bit key and GCM mode. 
        MBEDTLS_CIPHER_ARIA_128_CCM,          Aria cipher with 128-bit key and CCM mode. 
        MBEDTLS_CIPHER_ARIA_192_CCM,          Aria cipher with 192-bit key and CCM mode. 
        MBEDTLS_CIPHER_ARIA_256_CCM,          Aria cipher with 256-bit key and CCM mode. 
        MBEDTLS_CIPHER_ARIA_128_CCM_STAR_NO_TAG,  Aria cipher with 128-bit key and CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_ARIA_192_CCM_STAR_NO_TAG,  Aria cipher with 192-bit key and CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_ARIA_256_CCM_STAR_NO_TAG,  Aria cipher with 256-bit key and CCM_STAR_NO_TAG mode. 
        MBEDTLS_CIPHER_AES_128_OFB,           AES 128-bit cipher in OFB mode. 
        MBEDTLS_CIPHER_AES_192_OFB,           AES 192-bit cipher in OFB mode. 
        MBEDTLS_CIPHER_AES_256_OFB,           AES 256-bit cipher in OFB mode. 
        MBEDTLS_CIPHER_AES_128_XTS,           AES 128-bit cipher in XTS block mode. 
        MBEDTLS_CIPHER_AES_256_XTS,           AES 256-bit cipher in XTS block mode. 
        MBEDTLS_CIPHER_CHACHA20,              ChaCha20 stream cipher. 
        MBEDTLS_CIPHER_CHACHA20_POLY1305,     ChaCha20-Poly1305 AEAD cipher. 
        MBEDTLS_CIPHER_AES_128_KW,            AES cipher with 128-bit NIST KW mode. 
        MBEDTLS_CIPHER_AES_192_KW,            AES cipher with 192-bit NIST KW mode. 
        MBEDTLS_CIPHER_AES_256_KW,            AES cipher with 256-bit NIST KW mode. 
        MBEDTLS_CIPHER_AES_128_KWP,           AES cipher with 128-bit NIST KWP mode. 
        MBEDTLS_CIPHER_AES_192_KWP,           AES cipher with 192-bit NIST KWP mode. 
        MBEDTLS_CIPHER_AES_256_KWP,           AES cipher with 256-bit NIST KWP mode.
    } mbedtls_cipher_type_t;
    */

    //const mbedtls_cipher_info_t *mbedtls_cipher_info_from_type( const mbedtls_cipher_type_t cipher_type );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_info_from_type"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_info_from_type start");
            console.log("type : " + args[0].toInt32());
        },
        onLeave: (ret) => {
            console.log("mbedtls_cipher_info_from_type end");
        }
    });

    //int mbedtls_cipher_setup( mbedtls_cipher_context_t *ctx, const mbedtls_cipher_info_t *cipher_info );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_setup"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_setup start");
            console.log("type : " + args[1].readPointer().toInt32());
        },
        onLeave: (ret) => {
            console.log("mbedtls_cipher_setup end");
        }
    });

    /*
    typedef enum {
        MBEDTLS_OPERATION_NONE = -1,
        MBEDTLS_DECRYPT = 0,
        MBEDTLS_ENCRYPT,
    } mbedtls_operation_t;
    */

    //int mbedtls_cipher_setkey( mbedtls_cipher_context_t *ctx, const unsigned char *key, int key_bitlen, const mbedtls_operation_t operation );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_setkey"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_setkey start");
            console.log("key : " + args[1].readCString());
            console.log("hexdump : " + hd(args[1], 128));
            console.log("key_bitlen : " + args[2].toInt32());
            console.log("operation : " + args[3].toInt32());
        },
        onLeave: (ret) => {
            console.log("mbedtls_cipher_setkey end");
        }
    });

    /*
    typedef enum {
        MBEDTLS_PADDING_PKCS7 = 0,     /**< PKCS7 padding (default).        
        MBEDTLS_PADDING_ONE_AND_ZEROS, /**< ISO/IEC 7816-4 padding.         
        MBEDTLS_PADDING_ZEROS_AND_LEN, /**< ANSI X.923 padding.             
        MBEDTLS_PADDING_ZEROS,         /**< Zero padding (not reversible). 
        MBEDTLS_PADDING_NONE,          /**< Never pad (full blocks only).   
    } mbedtls_cipher_padding_t;
    */

    //int mbedtls_cipher_set_padding_mode( mbedtls_cipher_context_t *ctx, mbedtls_cipher_padding_t mode );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_set_padding_mode"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_set_padding_mode start");
            console.log("mode : " + args[1].toInt32());
        },
        onLeave: (ret) => {
            console.log("mbedtls_cipher_set_padding_mode end");
        }
    });

    //int mbedtls_cipher_set_iv( mbedtls_cipher_context_t *ctx, const unsigned char *iv, size_t iv_len );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_set_iv"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_set_iv start");
            console.log("iv : " + args[1].readCString());
            console.log("iv len : " + args[2].toInt32());
            console.log("hexdump : " + hd(args[1], args[2].toUInt32()));
        },
        onLeave: (ret) => {
            console.log("mbedtls_cipher_set_iv end");
        }
    });

    //int mbedtls_cipher_update( mbedtls_cipher_context_t *ctx, const unsigned char *input, size_t ilen, unsigned char *output, size_t *olen );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_update"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_update start");
            console.log("input : " + args[1].readCString());
            console.log("input len : " + args[2].toInt32());
            console.log("hexdump : " + hd(args[1], args[2].toInt32()));
            this.buf = args[3];
            this.len = args[4];
        },
        onLeave: (ret) => {
            console.log("output : " + this.buf.readCString());
            console.log("output len : " + this.len.readULong());
            console.log("hexdump : " + hd(this.buf, this.len.readULong()));
            console.log("mbedtls_cipher_update end");
        }
    });

    //int mbedtls_cipher_finish( mbedtls_cipher_context_t *ctx, unsigned char *output, size_t *olen );
    Interceptor.attach(module.findExportByName("mbedtls_cipher_finish"), {
        onEnter: (args) => {
            console.log("mbedtls_cipher_finish start");
            this.buf = args[1];
            this.len = args[2];
        },
        onLeave: (ret) => {
            console.log("output : " + this.buf.readCString());
            console.log("output len : " + this.len.readULong());
            console.log("hexdump : " + hd(this.buf, this.len.readULong()));
            console.log("mbedtls_cipher_finish end");
        }
    });

});

function hd(addr, len) {
    return hexdump(addr, {
        offset: 0,
        length: len,
        header: true,
        ansi: true
    });
}

global.Helpers = class {

    static #ollcs = new Map();

    // Credits : iGio90(https://github.com/iGio90/frida-onload), FrenchYeti(https://api.mtr.pub/FrenchYeti/interruptor)   
    // Related with OnLibraryLoad
    static init() {
        const self = this;

        const linker = Process.findModuleByName(Process.arch.includes("64") ? "linker64" : "linker");

        if (linker !== null) {
            // https://android.googlesource.com/platform/bionic/+/master/linker/linker.cpp
            // void* do_dlopen(const char* name, int flags, const android_dlextinfo* extinfo, const void* caller_addr)
            let do_dlopen_ptr = null;

            // https://android.googlesource.com/platform/bionic/+/master/linker/linker_soinfo.cpp
            // void soinfo::call_constructors()
            let call_constructors_ptr = null;

            for (const sym of linker.enumerateSymbols()) {
                const name = sym.name;
                if (name.includes("do_dlopen")) {
                    do_dlopen_ptr = sym.address;
                } else if (name.includes("call_constructors")) {
                    call_constructors_ptr = sym.address;
                }

                if (do_dlopen_ptr !== null && call_constructors_ptr !== null) {
                    break;
                }
            }

            if (do_dlopen_ptr !== null && call_constructors_ptr !== null) {
                let name = null;

                Interceptor.attach(do_dlopen_ptr, function(args) {
                    name = args[0].readCString();
                });

                Interceptor.attach(call_constructors_ptr, function(args) {
                    if (name !== null) {
                        const ollcs = self.#ollcs;
                        let library_name = null;
                        let callback = null;

                        for (const key of ollcs.keys()) {
                            if (name.includes(key)) {
                                library_name = key;
                                callback = ollcs.get(key);
                                break;
                            }
                        }

                        if (library_name !== null && callback !== null) {
                            const module = Process.findModuleByName(name);
                            if (module !== null) {
                                console.log(`[*] Library loaded : ${library_name}`);
                                callback(module);
                                // nullify after callback has been called to avoid weird behaviors
                                name = null;
                                ollcs.delete(library_name);                                
                            }
                        }
                    }
                });
            } else {
                console.error("[*] Failed to find do_dlopen and call_constructors in linker");
            }
        } else {
            console.error("[*] Failed to find linker");
        }
    }

    static getMatched(array, property, must_contain) {
        return array.filter(value => must_contain.every(str => value[property].includes(str)));
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

    static getClassWrapper(klass) {
        for (const loader of Java.enumerateClassLoadersSync()) {
            try {
                loader.findClass(klass);
                return Java.ClassFactory.get(loader).use(klass);
            } catch (e) {
                // ignore and continue
                continue;
            }
        }
        throw new Error(`${klass} not found`);
    }

    static onLibraryLoad(library_name, callback) {
        this.#ollcs.set(library_name, callback);
    }

    // Old implementation
    /*
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
                    callback(Process.findModuleByName(library_name));
                    console.log("[*] Callback executed");
                }
            }
        });
    }
    */
};
