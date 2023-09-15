rmdir /S /Q .\js

CALL ..\antlr4.bat -Dlanguage=CSharp -o .\cs .\*.g4 -visitor