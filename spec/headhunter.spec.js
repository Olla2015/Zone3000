

const hireCandidate = require('../hire.candidate');

describe(`Head hunter.`, () => {
    describe(`#Candidate candidate is suitable.`, () => {
    
    
    it (`should be suitable for male candidate with 16 years old`, () =>{
        const candidate = hireCandidate.candidate(16, 'male');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be suitable for male candidate with 50 years old`, () =>{
        const candidate = hireCandidate.candidate(50, 'male');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be suitable for male candidate with 25 years old`, () =>{
        const candidate = hireCandidate.candidate(25, 'male');
        expect(candidate).toBe('Candidate can be hired')
    });
    
     it (`should be suitable for female candidate with 20 years old`, () =>{
        const candidate = hireCandidate.candidate(20, 'female');
        expect(candidate).toBe('Candidate can be hired')
    });

     it (`should be suitable for female candidate with 45 years old`, () =>{
        const candidate = hireCandidate.candidate(45, 'female');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be suitable for female candidate with 30 years old`, () =>{
        const candidate = hireCandidate.candidate(30, 'female');
        expect(candidate).toBe('Candidate can be hired')
    });

    });

    describe(`#Candidate candidate is NOT suitable.`, () => {
    
    
    it (`should be NOT suitable for male candidate with 15 years old`, () =>{
        const candidate = myModuleName.candidate(15, 'male');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be NOT suitable for male candidate with 51 years old`, () =>{
        const candidate = myModuleName.candidate(51, 'male');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be NOT suitable for female candidate with 19 years old`, () =>{
        const candidate = myModuleName.candidate(19, 'female');
        expect(candidate).toBe('Candidate can be hired')
    });
    
    it (`should be NOT suitable for female candidate with 46 years old`, () =>{
        const candidate = myModuleName.candidate(46, 'female');
        expect(candidate).toBe('Candidate can be hired')
    });
});

});















