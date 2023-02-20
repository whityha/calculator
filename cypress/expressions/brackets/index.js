export const openBrackets = [
    { expression: '(((((25+10=', result: '35' },
    { expression: '((25+((10*2=', result: '45' },
    { expression: '(((((25+1))=', result: '26' },
    { expression: '(7(3+2(303+1=', result: '4277' },
];

export const closeBrackets = [
    { expression: '25+1))))))))))))))))=', result: '26' },
    { expression: '()7(4+2)=', result: '42' },
    { expression: '((25+)))1+2))))))))))))===', result: '28' },
    { expression: '()()()()()(())', result: '' },
];
