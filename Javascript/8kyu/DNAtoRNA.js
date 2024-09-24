// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"

// my solution

function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }


// test

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(DNAtoRNA("TTTT"), "UUUU")
    assert.strictEqual(DNAtoRNA("GCAT"), "GCAU")
    assert.strictEqual(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC")
    assert.strictEqual(DNAtoRNA("GATTCCACCGACTTCCCAAGTACCGGAAGCGCGACCAACTCGCACAGC"), "GAUUCCACCGACUUCCCAAGUACCGGAAGCGCGACCAACUCGCACAGC")
    assert.strictEqual(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"), 'CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA')
    assert.strictEqual(DNAtoRNA("CACGACATACGGAGCAGCGCACGGTTAGTACAGCTGTCGGTGAACTCCATGACA"), 'CACGACAUACGGAGCAGCGCACGGUUAGUACAGCUGUCGGUGAACUCCAUGACA')
    assert.strictEqual(DNAtoRNA("AACCCTGTCCACCAGTAACGTAGGCCGACGGGAAAAATAAACGATCTGTCAATG"), 'AACCCUGUCCACCAGUAACGUAGGCCGACGGGAAAAAUAAACGAUCUGUCAAUG')
    assert.strictEqual(DNAtoRNA("GAAGCTTATCCGTTCCTGAAGGCTGTGGCATCCTCTAAATCAGACTTGGCTACGCCGTTAGCCGAGGGCTTAGCGTTGAGTGTCATTATATACGCGGCCTGCGACCTGGCCACACAATGCCCTCGAAAATTTTTCTTTCGGTTATACGAGTTGCGAAACCTTTCGCGCGTAGACGAAGAATTTGAAGTGGCCTACACCGTTTGGAAAGCCGTTCTCATTAGAATGGTACCGACTACTCGGCTCGGAGTCATTGTATAGGGAGAGTGTCGTATCAACATCACACACTTTTAGCATTTAAGGTCCATGGCCGTTGACAGGTACCGA"), 'GAAGCUUAUCCGUUCCUGAAGGCUGUGGCAUCCUCUAAAUCAGACUUGGCUACGCCGUUAGCCGAGGGCUUAGCGUUGAGUGUCAUUAUAUACGCGGCCUGCGACCUGGCCACACAAUGCCCUCGAAAAUUUUUCUUUCGGUUAUACGAGUUGCGAAACCUUUCGCGCGUAGACGAAGAAUUUGAAGUGGCCUACACCGUUUGGAAAGCCGUUCUCAUUAGAAUGGUACCGACUACUCGGCUCGGAGUCAUUGUAUAGGGAGAGUGUCGUAUCAACAUCACACACUUUUAGCAUUUAAGGUCCAUGGCCGUUGACAGGUACCGA')
    });
  })
    
describe("Random tests", () => {  
  
  const s = "ACGT"
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  for(let i = 0; i < 100; i++){
    let word = Array.from({length: randint(0, 20)}, (_, i) => s[randint(0, s.length - 1)]).join``
    let expected = word.replace(/T/g, "U")
    it(`sDNAtoRNA(${JSON.stringify(word)}) should equal ${JSON.stringify(expected)}`, () => {
      assert.strictEqual(DNAtoRNA(word), expected);
    });
  }
})   
