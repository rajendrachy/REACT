function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
  return typeof a === 'number' && typeof b === 'number' ? a + b : a.toString() + b.toString();
}

function handleAdd() {
  const val1 = (document.getElementById('input1') as HTMLInputElement).value;
  const val2 = (document.getElementById('input2') as HTMLInputElement).value;

  const num1 = Number(val1);
  const num2 = Number(val2);

  let result: string | number;

  if (!isNaN(num1) && !isNaN(num2)) {
    result = add(num1, num2);
  } else {
    result = add(val1, val2);
  }

  (document.getElementById('result') as HTMLElement).innerText = `Result: ${result}`;
}

