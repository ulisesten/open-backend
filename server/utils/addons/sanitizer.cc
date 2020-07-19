#define NAPI_VERSION 3

#include <node_api.h>
#include <stdio.h>

napi_value init(napi_env env, napi_value exports){
    
    printf("testing sanitizer\n");

    return exports;
}