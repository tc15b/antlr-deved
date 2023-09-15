rmdir /S /Q .\ts

CALL ..\antlr4.bat -Dlanguage=TypeScript -o .\ts .\*.g4 -visitor