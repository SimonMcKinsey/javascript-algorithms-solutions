// Given a string, find the length of the longest substring in it 
// with no more than K distinct characters.

function longest_substring_with_k_distinct(str, k) {
    const distinctMap = new Map();
    let maxWindow = 0;
    let windowStart = 0; // index
    
    for(let windowEnd = 0; windowEnd < str.length; windowEnd++) {
      distinctMap.set(str[windowStart], distinctMap.get(str[windowStart]) + 1 || 1); // NaN || 1
      
      while(distinctMap.get(str[windowEnd]) > k) {
        distinctMap.set(str[windowEnd], distinctMap.get(str[windowEnd]) - 1);
        windowStart++;
      }
      
      maxWindow = Math.max(maxWindow, windowEnd - windowStart);
    }
    
     return maxWindow;
  }
  
  const result1 = longest_substring_with_k_distinct("araaci", 2); // 4
  const result2 = longest_substring_with_k_distinct("araaci", 1); // 2
  const result3 = longest_substring_with_k_distinct("cbbebi", 3);// 5
  
  console.log(result1, result2, result3);
  