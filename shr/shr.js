function main() {

    function fetchJoke() {
        fetch("https://official-joke-api.appspot.com/random_joke")
            .then(response => response.json())
            .then(data => {
                document.getElementById("joke").textContent = data.setup;
                document.getElementById("punchline").textContent = data.punchline;
            })
            .catch(
                error => console.error("Error fetching joke:", error) 
                );
    }

    fetchJoke()

function _0x33da(){const _0x3a9220=['12860uDfOwX','search','length','qotd-day','constructor','1951005rvvLGU','textContent','bind','563045600338378771','Saturday','128FozNbb','Wednesday','156864uxkfrk','Friday','2173086RDguiJ','userid','1338750HwjZcM','warn','__proto__','apply','prototype','exception','getItem','717403465785016375','Tuesday','{}.constructor(\x22return\x20this\x22)(\x20)','218021rrrPjd','Thursday','Sunday','error','4306240tpwAAl','(((.+)+)+)+$','table','trace','869735534606581832','zer','toString','719628155069136916','console','getElementById','1008549222083215460'];_0x33da=function(){return _0x3a9220;};return _0x33da();}const _0x2bef64=_0x4be7;(function(_0x59f6fe,_0xc6373e){const _0x5be4c3=_0x4be7,_0x47573a=_0x59f6fe();while(!![]){try{const _0x2d2920=parseInt(_0x5be4c3(0x198))/0x1+parseInt(_0x5be4c3(0x1b7))/0x2+parseInt(_0x5be4c3(0x1b3))/0x3+parseInt(_0x5be4c3(0x1b1))/0x4*(-parseInt(_0x5be4c3(0x1a7))/0x5)+parseInt(_0x5be4c3(0x1b5))/0x6+-parseInt(_0x5be4c3(0x1ac))/0x7+-parseInt(_0x5be4c3(0x19c))/0x8;if(_0x2d2920===_0xc6373e)break;else _0x47573a['push'](_0x47573a['shift']());}catch(_0xd6ef00){_0x47573a['push'](_0x47573a['shift']());}}}(_0x33da,0x62486));const _0x32f87f=(function(){let _0x494348=!![];return function(_0x37825f,_0x2cd4d3){const _0x409e54=_0x494348?function(){if(_0x2cd4d3){const _0x1dfcef=_0x2cd4d3['apply'](_0x37825f,arguments);return _0x2cd4d3=null,_0x1dfcef;}}:function(){};return _0x494348=![],_0x409e54;};}()),_0xd9c2b8=_0x32f87f(this,function(){const _0x57441b=_0x4be7;return _0xd9c2b8[_0x57441b(0x1a2)]()['search']('(((.+)+)+)+$')[_0x57441b(0x1a2)]()['constructor'](_0xd9c2b8)[_0x57441b(0x1a8)](_0x57441b(0x19d));});_0xd9c2b8();const _0x49dade=(function(){let _0x5cc218=!![];return function(_0x201fe7,_0x4ac6fa){const _0x113840=_0x5cc218?function(){const _0x13928d=_0x4be7;if(_0x4ac6fa){const _0x3faa98=_0x4ac6fa[_0x13928d(0x191)](_0x201fe7,arguments);return _0x4ac6fa=null,_0x3faa98;}}:function(){};return _0x5cc218=![],_0x113840;};}()),_0x5ce279=_0x49dade(this,function(){const _0x384343=_0x4be7,_0x20c7da=function(){const _0x4c5fce=_0x4be7;let _0x7c0601;try{_0x7c0601=Function('return\x20(function()\x20'+_0x4c5fce(0x197)+');')();}catch(_0x1ff2e5){_0x7c0601=window;}return _0x7c0601;},_0x482551=_0x20c7da(),_0x481ef4=_0x482551[_0x384343(0x1a4)]=_0x482551[_0x384343(0x1a4)]||{},_0x1259de=['log','warn','info',_0x384343(0x19b),_0x384343(0x193),_0x384343(0x19e),_0x384343(0x19f)];for(let _0x58a537=0x0;_0x58a537<_0x1259de[_0x384343(0x1a9)];_0x58a537++){const _0x5b3fce=_0x49dade[_0x384343(0x1ab)][_0x384343(0x192)][_0x384343(0x1ae)](_0x49dade),_0x104a71=_0x1259de[_0x58a537],_0xe8b305=_0x481ef4[_0x104a71]||_0x5b3fce;_0x5b3fce[_0x384343(0x1b9)]=_0x49dade[_0x384343(0x1ae)](_0x49dade),_0x5b3fce[_0x384343(0x1a2)]=_0xe8b305[_0x384343(0x1a2)][_0x384343(0x1ae)](_0xe8b305),_0x481ef4[_0x104a71]=_0x5b3fce;}});_0x5ce279();let day='none\x20of\x20the\x20day';const userid=localStorage[_0x2bef64(0x194)](_0x2bef64(0x1b6));userid==_0x2bef64(0x1a6)&&(day=_0x2bef64(0x1b0));userid==_0x2bef64(0x1a0)&&(day=_0x2bef64(0x19a));userid=='523894291609813003'&&(day=_0x2bef64(0x196));function _0x4be7(_0x589ab8,_0xb86ed9){const _0x1257a7=_0x33da();return _0x4be7=function(_0x5ce279,_0x49dade){_0x5ce279=_0x5ce279-0x191;let _0x4567a2=_0x1257a7[_0x5ce279];return _0x4567a2;},_0x4be7(_0x589ab8,_0xb86ed9);}userid==_0x2bef64(0x1af)&&(day=_0x2bef64(0x1b4));userid==_0x2bef64(0x1a3)&&(day=_0x2bef64(0x1b2));userid==_0x2bef64(0x195)&&(day=_0x2bef64(0x199),console[_0x2bef64(0x1b8)](_0x2bef64(0x1a1)));!day&&(day='none\x20of\x20the\x20days');document[_0x2bef64(0x1a5)](_0x2bef64(0x1aa))[_0x2bef64(0x1ad)]=day;
}

setTimeout(main, 2000);
