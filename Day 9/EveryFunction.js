function testJackpot(combinations){
    return combinations.every((currentSymbol) => combinations[0]==currentSymbol);
}