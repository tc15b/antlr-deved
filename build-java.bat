rmdir /S /Q .\java

CALL ..\antlr4.bat -o .\java .\*.g4 -visitor

javac .\java\*.java