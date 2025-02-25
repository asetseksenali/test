// example.ts
// This TypeScript code intentionally contains several SonarQube issues for demonstration purposes

function processData(data: any): any {
    // Using 'any' type is not recommended
    if (data != null) {
      let sum = 0;
      for (let i = 0; i < data.length; i++) {
        // Magic number used without explanation
        if (data[i] > 10) {
          sum += data[i];
        }
      }
      return sum;
    } else {
      // Missing handling for null/undefined data
    }
    return 0;
  }
  
  function duplicateCode(data: any[]): number {
    let result = 0;
    // Duplicate code block: the same logic repeated twice
    for (let i = 0; i < data.length; i++) {
      if (data[i] != null && data[i] > 5) {
        result += data[i];
      }
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i] != null && data[i] > 5) {
        result += data[i];
      }
    }
    return result;
  }
  
  class Example1 {
    // 'any' type is discouraged
    private value: any;
  
    constructor(value: any) {
      this.value = value;
    }
  
    public riskyMethod(): any {
      try {
        // Potential risky operation without proper error handling
        if (this.value > 100) {
          return this.value / 2;
        } else {
          return this.value * 2;
        }
      } catch (error) {
        // Empty catch block hides potential errors
      }
    }
  }
  
  // Unused variable that might indicate dead code
  const unusedVariable1 = "I am not used";
  
  // Function with deep nesting and high cognitive complexity
  function complexFunction(input: any): any {
    if (input) {
      if (input.a) {
        if (input.a.b) {
          if (input.a.b.c) {
            return input.a.b.c;
          }
        }
      }
    }
    return null;
  }
  
  // TODO: Remove this deprecated code in future versions
  // const deprecatedFunction = () => {
  //   console.log("This function is deprecated.");
  // }
  