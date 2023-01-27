# mfe-simple
no frameworks, just simple javascript and webpack module federation


![front-end monolithic SPA architecture ](01-Monolithic-SinglePageApplication.jpg "front-end monolithic SPA architecture")



# Projects

Lets build 3 seperate teams, 3 seperate projects
![Seperate Teams Building Seperate Parts ](SeperateTeamsBuilding.jpg "Seperate Teams Building Seperate Parts")

## /products
// https://fakerjs.dev/api/

npm install webpack@5.4.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 faker@5.1.0 html-webpack-plugin@4.5.0

but how to keep them at this level?

npm run start

> products@1.0.0 start

> webpack

node:internal/crypto/hash:71

  this[kHandle] = new _Hash(algorithm, xofLen);

                  ^

Error: error:0308010C:digital envelope routines::unsupported
    
    at new Hash (node:internal/crypto/hash:71:19)
    
    at Object.createHash (node:crypto:133:10)
    
    at BulkUpdateDecorator.hashFactory (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\util\createHash.js:138:18)
    
    at BulkUpdateDecorator.update (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\util\createHash.js:44:50)
    
    at RawSource.updateHash (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack-sources\lib\RawSource.js:64:8)
    
    at NormalModule._initBuildHash (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\NormalModule.js:736:17)
    
    at handleParseResult (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\NormalModule.js:800:10)
    
    at C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\NormalModule.js:853:4
    
    at processResult (C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\NormalModule.js:624:11)
    
    at C:\Users\Michael\code\mfe-simple\mfe-simple\projects\products\node_modules\webpack\lib\NormalModule.js:675:5 {
  
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],

  library: 'digital envelope routines',

  reason: 'unsupported',

  code: 'ERR_OSSL_EVP_UNSUPPORTED'

}

Node.js v18.12.1

Open and run, check your broswer at 8082, from this sample

--------------------------------
## /container
npm install webpack@5.68.0 webpack-cli@4.10.0 webpack-dev-server@4.7.4 html-webpack-plugin@5.5.0 nodemon

![Index template from Container ](container-index-template.jpg "Index template from Container ")

Open and run, check your broswer at 8080, from this sample

## /cart

Open and run, check your broswer at 8084, from this sample
![Webpack-config from Cart ](cart-webpack-configjpg.jpg "Webpack-config from Cart")

Next Starting point, Step 21
