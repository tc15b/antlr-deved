rmdir /S /Q .\js

CALL ..\antlr4.bat -Dlanguage=JavaScript -o .\js .\*.g4 -visitor