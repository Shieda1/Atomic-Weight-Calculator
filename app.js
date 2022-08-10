// https://calculator.swiftutors.com/atomic-weight-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const atomicWeightRadio = document.getElementById('atomicWeightRadio');
const mass1Radio = document.getElementById('mass1Radio');
const fract1Radio = document.getElementById('fract1Radio');
const mass2Radio = document.getElementById('mass2Radio');
const fract2Radio = document.getElementById('fract2Radio');

let atomicWeight;
let mass1 = v1;
let fract1 = v2;
let mass2 = v3;
let fract2 = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

atomicWeightRadio.addEventListener('click', function() {
  variable1.textContent = 'Mass1 (amu)';
  variable2.textContent = 'Fract1 (%)';
  variable3.textContent = 'Mass2 (amu)';
  variable4.textContent = 'Fract2 (%)';
  mass1 = v1;
  fract1 = v2;
  mass2 = v3;
  fract2 = v4;
  result.textContent = '';
});

mass1Radio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Weight (amu)';
  variable2.textContent = 'Fract1 (%)';
  variable3.textContent = 'Mass2 (amu)';
  variable4.textContent = 'Fract2 (%)';
  atomicWeight = v1;
  fract1 = v2;
  mass2 = v3;
  fract2 = v4;
  result.textContent = '';
});

fract1Radio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Weight (amu)';
  variable2.textContent = 'Mass1 (amu)';
  variable3.textContent = 'Mass2 (amu)';
  variable4.textContent = 'Fract2 (%)';
  atomicWeight = v1;
  mass1 = v2;
  mass2 = v3;
  fract2 = v4;
  result.textContent = '';
});

mass2Radio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Weight (amu)';
  variable2.textContent = 'Mass1 (amu)';
  variable3.textContent = 'Fract1 (%)';
  variable4.textContent = 'Fract2 (%)';
  atomicWeight = v1;
  mass1 = v2;
  fract1 = v3;
  fract2 = v4;
  result.textContent = '';
});

fract2Radio.addEventListener('click', function() {
  variable1.textContent = 'Atomic Weight (amu)';
  variable2.textContent = 'Mass1 (amu)';
  variable3.textContent = 'Fract1 (%)';
  variable4.textContent = 'Mass2 (amu)';
  atomicWeight = v1;
  mass1 = v2;
  fract1 = v3;
  mass2 = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(atomicWeightRadio.checked)
    result.textContent = `Atomic Weight = ${computeAtomicWeight().toFixed(2)} amu`;

  else if(mass1Radio.checked)
    result.textContent = `Mass1 = ${computeMass1().toFixed(2)} amu`;

  else if(fract1Radio.checked)
    result.textContent = `Fract1 = ${computeFract1().toFixed(2)} %`;

  else if(mass2Radio.checked)
    result.textContent = `Mass2 = ${computeMass2().toFixed(2)} amu`;

  else if(fract2Radio.checked)
    result.textContent = `Fract2 = ${computeFract2().toFixed(2)} %`;
})

// calculation

function computeAtomicWeight() {
  return (Number(mass1.value) * Number(fract1.value)) + (Number(mass2.value) * Number(fract2.value))
}

function computeMass1() {
  return (Number(atomicWeight.value) - (Number(mass2.value) * Number(fract2.value))) / Number(fract1.value);
}

function computeFract1() {
  return (Number(atomicWeight.value) - (Number(mass2.value) * Number(fract2.value))) / Number(mass1.value);
}

function computeMass2() {
  return (Number(atomicWeight.value) - (Number(mass1.value) * Number(fract1.value))) / Number(fract2.value);
}

function computeFract2() {
  return (Number(atomicWeight.value) - (Number(mass1.value) * Number(fract1.value))) / Number(mass2.value);
}