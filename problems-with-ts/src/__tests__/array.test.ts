import { 
  maxValueInArray, 
  minValueInArray, 
  removeDuplicates, 
  searchInsert, 
  twoSum, 
  pluseOne, 
  mergeSortArrays, 
  numberOfSubArraySum, 
  getIndexOfSum, 
  getSumOfIndex, 
  groupAnagrams} from "../DS/array";

describe('max and min value in array', () => {
  it('should return the min value in array', () => {
    const min = minValueInArray([1, 2, 3, 4, 5]);
    expect(min).toBe(1);
  });

  it('shoudl return the max value in array', () => {
    const max = maxValueInArray([1, 2, 3, 4, 5]);
    expect(max).toBe(5);
  })
});

describe('two sum', () => {
  it('should return the indices of the two numbers such that they add up to target', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });
});

describe('remove duplicates from sorted array', () => {
  it('should return the new array after removing duplicates', () => {
    const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    const result = removeDuplicates(nums);
    expect(result).toBe(5);
  });
});

describe('search insert position', () => {
  it('should return the index of the target if it is found', () => {
    const nums = [1, 3, 5, 6];
    const target = 5;
    const result = searchInsert(nums, target);
    expect(result).toBe(2);
  });

  it('should return the index of the target if it is found', () => {
    const nums = [1, 3, 5, 6];
    const target = 2;
    const result = searchInsert(nums, target);
    expect(result).toBe(1);
  });

  it('should return the index of the target if it is found', () => {
    const nums = [1, 3, 5, 6];
    const target = 7;
    const result = searchInsert(nums, target);
    expect(result).toBe(4);
  });

  it('should return array pluse one', () => {
    const nums = [4,3,2,1];
    const result = pluseOne(nums)
    expect(result).toEqual([4, 3, 2, 2])
  });


  it('should return array pluse one', () => {
    const nums = [9, 9] ;
    const result = pluseOne(nums)
    expect(result).toEqual([1, 0 ,0])
  });

  it('should return Merge Sorted Array', () => {
    const num1 = [1,2,3,0,0,0]
    const m = 3
    const num2 = [3,4,5]
    const n = 3
    const result = mergeSortArrays(num1, m, num2, n)
    expect(result).toEqual([1,2,3,3,4,5])
  })

  it('should return number of subarray that sum equal to target', () => {
    const nums = [1, 1, 1, 1]
    const target = 2
    const result = numberOfSubArraySum(nums, target);
    expect(result).toBe(3);
  })

  it('should return indexs of sum', () => {
      const nums = [1,2,3,4,5]
      const target = 9
      const result = getIndexOfSum(nums, target)
      expect(result).toEqual([0,2,4])
  })

  it('should return indexs of sum', () => {
    const nums = [1,2,3,4,5]
    const result = getSumOfIndex(nums , 2, 3)
    expect(result).toEqual(3)
  })

  it('should return group of anagram', () => {
    const nums = ["eat","tea","tan","ate","nat","bat"]
    const result = groupAnagrams(nums)
    expect(result).toEqual([["eat","tea","ate"],["tan","nat"],["bat"]])
  })

  it('should return top K Frequent useing bucket sort', () => {
    const nums = [1,1,1,2,2,3]
    const k = 2
    const result = topKFrequentUsingBucketSort(nums, k)
    expect(result).toEqual([1,2])
  })
  
})