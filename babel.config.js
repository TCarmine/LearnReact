

const presets = [
   [ 
        "@babel/preset-env",
        {
            useBuiltIns: "usage", // or "entry"
            corejs: 3,
            targets:
                {
                    edge:"17",
                    firefox:"60",
                    chrome:"67",
                    safari:"11.1",
                },
            useBuiltIns: "usage",
        }
        
   ],
   ["@babel/preset-react"]  
];

module.exports = { presets };