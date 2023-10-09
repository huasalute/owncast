"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4323],{74323:function(e,t,n){function wordRegexp(e){return RegExp("^(("+e.join(")|(")+"))\\b")}n.r(t),n.d(t,{cython:function(){return s},mkPython:function(){return mkPython},python:function(){return a}});var r=wordRegexp(["and","or","not","is"]),i=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function top(e){return e.scopes[e.scopes.length-1]}function mkPython(e){for(var t="error",n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,a=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],s=0;s<a.length;s++)a[s]||a.splice(s--,1);var c=e.hangingIndent,l=i,u=o;void 0!=e.extra_keywords&&(l=l.concat(e.extra_keywords)),void 0!=e.extra_builtins&&(u=u.concat(e.extra_builtins));var p=!(e.version&&3>Number(e.version));if(p){var f=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;l=l.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),u=u.concat(["ascii","bytes","exec","print"]);var d=RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else{var f=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;l=l.concat(["exec","print"]),u=u.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);var d=RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var m=wordRegexp(l),h=wordRegexp(u);function tokenBase(e,n){var r=e.sol()&&"\\"!=n.lastToken;if(r&&(n.indent=e.indentation()),r&&"py"==top(n).type){var i=top(n).offset;if(e.eatSpace()){var o=e.indentation();return o>i?pushPyScope(e,n):o<i&&dedent(e,n)&&"#"!=e.peek()&&(n.errorToken=!0),null}var a=tokenBaseInner(e,n);return i>0&&dedent(e,n)&&(a+=" "+t),a}return tokenBaseInner(e,n)}function tokenBaseInner(i,o,s){if(i.eatSpace())return null;if(!s&&i.match(/^#.*/))return"comment";if(i.match(/^[0-9\.]/,!1)){var c=!1;if(i.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(c=!0),i.match(/^[\d_]+\.\d*/)&&(c=!0),i.match(/^\.\d+/)&&(c=!0),c)return i.eat(/J/i),"number";var l=!1;if(i.match(/^0x[0-9a-f_]+/i)&&(l=!0),i.match(/^0b[01_]+/i)&&(l=!0),i.match(/^0o[0-7_]+/i)&&(l=!0),i.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(i.eat(/J/i),l=!0),i.match(/^0(?![\dx])/i)&&(l=!0),l)return i.eat(/L/i),"number"}if(i.match(d))return -1!==i.current().toLowerCase().indexOf("f")?o.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,o="string";function tokenString(a,s){for(;!a.eol();)if(a.eatWhile(/[^'"\{\}\\]/),a.eat("\\")){if(a.next(),i&&a.eol())return o}else if(a.match(n))return s.tokenize=r,o;else if(a.match("{{"))return o;else if(a.match("{",!1)){if(s.tokenize=function tokenNestedExpr(e){return function(t,n){var r=tokenBaseInner(t,n,!0);return"punctuation"==r&&("{"==t.current()?n.tokenize=tokenNestedExpr(e+1):"}"==t.current()&&(e>1?n.tokenize=tokenNestedExpr(e-1):n.tokenize=tokenString)),r}}(0),a.current())return o;return s.tokenize(a,s)}else{if(a.match("}}"))return o;if(a.match("}"))return t;a.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return o}return tokenString.isString=!0,tokenString}(i.current(),o.tokenize):o.tokenize=function(n,r){for(;"rubf".indexOf(n.charAt(0).toLowerCase())>=0;)n=n.substr(1);var i=1==n.length,o="string";function tokenString(a,s){for(;!a.eol();)if(a.eatWhile(/[^'"\\]/),a.eat("\\")){if(a.next(),i&&a.eol())return o}else{if(a.match(n))return s.tokenize=r,o;a.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return o}return tokenString.isString=!0,tokenString}(i.current(),o.tokenize),o.tokenize(i,o);for(var u=0;u<a.length;u++)if(i.match(a[u]))return"operator";return i.match(n)?"punctuation":"."==o.lastToken&&i.match(f)?"property":i.match(m)||i.match(r)?"keyword":i.match(h)?"builtin":i.match(/^(self|cls)\b/)?"self":i.match(f)?"def"==o.lastToken||"class"==o.lastToken?"def":"variable":(i.next(),s?null:t)}function pushPyScope(e,t){for(;"py"!=top(t).type;)t.scopes.pop();t.scopes.push({offset:top(t).offset+e.indentUnit,type:"py",align:null})}function dedent(e,t){for(var n=e.indentation();t.scopes.length>1&&top(t).offset>n;){if("py"!=top(t).type)return!0;t.scopes.pop()}return top(t).offset!=n}return{name:"python",startState:function(){return{tokenize:tokenBase,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=function(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&"@"==i)return e.match(f,!1)?"meta":p?"operator":t;if(/\S/.test(i)&&(n.beginningOfLine=!1),("variable"==r||"builtin"==r)&&"meta"==n.lastToken&&(r="meta"),("pass"==i||"return"==i)&&(n.dedent=!0),"lambda"==i&&(n.lambda=!0),":"==i&&!n.lambda&&"py"==top(n).type&&e.match(/^\s*(?:#|$)/,!1)&&pushPyScope(e,n),1==i.length&&!/string|comment/.test(r)){var o="[({".indexOf(i);if(-1!=o&&function(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(c||e.indentUnit),type:n,align:r})}(e,n,"])}".slice(o,o+1)),-1!=(o="])}".indexOf(i))){if(top(n).type!=i)return t;n.indent=n.scopes.pop().offset-(c||e.indentUnit)}}return n.dedent&&e.eol()&&"py"==top(n).type&&n.scopes.length>1&&n.scopes.pop(),r}(e,n);return i&&"comment"!=i&&(n.lastToken="keyword"==i||"punctuation"==i?e.current():i),"punctuation"==i&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:i},indent:function(e,t,n){if(e.tokenize!=tokenBase)return e.tokenize.isString?null:0;var r=top(e),i=r.type==t.charAt(0)||"py"==r.type&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return null!=r.align?r.align-(i?1:0):r.offset-(i?c||n.unit:0)},languageData:{autocomplete:i.concat(o).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}let a=mkPython({}),s=mkPython({extra_keywords:"by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE".split(" ")})}}]);