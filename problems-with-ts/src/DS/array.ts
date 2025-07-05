function minValueInArray(arr: number[]): number {
  return Math.min(...arr);
}

function maxValueInArray(arr: number[]): number {
    return Math.max(...arr);
}

function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>()
    for (let i = 0; i < nums.length; i++) {
        const match = target- nums[i]
        if(map.has(match)) {
            return [map.get(match) || 0, i];
        }
        map.set(nums[i], i)
    }
    return []
}

function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let k = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
}

function binarySearch(nums: number[], target: number, left: number, right: number): number {
    if (left > right) return left;

    const mid = Math.floor((left+right) / 2)
    if(nums[mid] == target) return mid;
    if(target > nums[mid]) return binarySearch(nums, target, mid + 1, right)
    else return binarySearch(nums, target, left, mid - 1)
}

function searchInsert(nums: number[], target: number): number {
  return binarySearch(nums, target, 0, nums.length - 1)
}

function pluseOne(nums: number[]): number[] {
    return (BigInt(nums.join('')) + BigInt(1)).toString().split('').map(num => parseInt(num))

}

function mergeSortArrays(nums1: any[], m:number, nums2: any[], n:number) {
    nums1.splice(m, nums1.length - m, ...nums2.slice(0, n))
    return nums1.sort((a, b) => a - b);
}

function numberOfSubArraySum(nums: number[], target: number): number {
    // O(n) solution using prefix sum and hashmap
    let count = 0;
    let prefixSum = 0;
    const prefixMap = new Map<number, number>();
    prefixMap.set(0, 1); // To handle subarrays starting from index 0

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if (prefixMap.has(prefixSum - target)) {
            count += prefixMap.get(prefixSum - target)!;
        }
        prefixMap.set(prefixSum, (prefixMap.get(prefixSum) || 0) + 1);
    }
    return count;
}

function getSumOfIndex(nums: number[], left:number, right:number): number {
    return nums.slice(left, right).reduce((pre: number, current: number) => {
        return pre + current;
    }, 0)
}
function pivotIndex(nums: number[]): number {
    let totalSum = 0;
    for (let i = 0; i < nums.length; i++) {
        totalSum += nums[i];
    }

    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        // The sum of elements to the right of index i is totalSum - leftSum - nums[i]
        const rightSum = totalSum - leftSum - nums[i];
        
        if (leftSum === rightSum) {
            return i;
        }
        // Add current element to leftSum for the next iteration
        leftSum += nums[i];
    }

    return -1;
}
/**
 * الدالة دي اسمها getIndexOfSum، وفكرتها إنها بتدور على مجموعة من العناصر (مش شرط يكونوا متتاليين) من مصفوفة أرقام nums
 * بحيث يكون مجموعهم بيساوي target، وبترجع إندكساتهم (أماكنهم في المصفوفة).
 * 
 * خلينا نشرح خطوة بخطوة:
 * 
 * 1. الدالة بتاخد مصفوفتين: nums (الأرقام) و target (المجموع اللي بندور عليه).
 * 
 * 2. جواها في دالة تانية اسمها backtrack، ودي بتستخدم أسلوب اسمه "الباك تراكينج" أو التجريب مع التراجع.
 *    - backtrack بتاخد 3 حاجات:
 *      - start: منين نبدأ ندور في المصفوفة (عشان منكررشي نفس العنصر).
 *      - currSum: المجموع الحالي اللي وصلناله.
 *      - path: مصفوفة فيها الإندكسات اللي اخترناها لحد دلوقتي.
 * 
 * 3. أول شرط في backtrack:
 *    - لو currSum بقى بيساوي target، يبقى لقينا مجموعة مظبوطة، فبنرجع path (الإندكسات اللي جمعناهم).
 * 
 * 4. الشرط التاني:
 *    - لو currSum بقى أكبر من target (وده ينفع لو الأرقام كلها موجبة)، أو لو وصلنا لنهاية المصفوفة، بنرجع null (يعني مفيش حل في الطريق ده).
 * 
 * 5. بعد كده بنعمل لوب من start لحد آخر المصفوفة:
 *    - في كل مرة بنجرب نضيف العنصر ده (nums[i]) للمجموع، ونكمل ندور من بعده (i+1)، ونضيف إندكسه لـ path.
 *    - لو لقينا حل (res مش null)، بنرجعه على طول.
 * 
 * 6. لو خلصنا كل الاحتمالات ومفيش حل، بنرجع null.
 * 
 * 7. في الآخر بنشغل backtrack من الأول (start=0, currSum=0, path=[])، ولو رجع حل بنرجعه، لو لأ بنرجع مصفوفة فاضية.
 * 
 * مثال عملي:
 * لو nums = [1,2,3,4,5] و target = 9
 * الدالة هتلاقي إن 1+3+5 = 9، والإندكسات بتاعتهم [0,2,4]، فده اللي هترجعه.
 */
function getIndexOfSum(nums: number[], target: number): number[] {
    // الدالة المساعدة اللي بتجرب كل الاحتمالات
    function backtrack(start: number, currSum: number, path: number[]): number[] | null {
        // لو وصلنا للمجموع المطلوب، نرجع الإندكسات اللي جمعناها
        if (currSum === target) return path;
        // لو المجموع زاد عن المطلوب أو وصلنا لنهاية المصفوفة، نوقف
        if (currSum > target || start === nums.length) return null;
        // نجرب كل عنصر من المكان اللي واقفين عنده
        for (let i = start; i < nums.length; i++) {
            // نجرب نضيف العنصر ده ونكمل
            const res = backtrack(i + 1, currSum + nums[i], [...path, i]);
            if (res) return res; // لو لقينا حل، نرجعه على طول
        }
        // لو مفيش حل في الطريق ده
        return null;
    }

    const result = backtrack(0, 0, []);
    // لو لقينا حل نرجعه، لو لأ نرجع مصفوفة فاضية
    return result ? result : [];
}

function groupAnagrams(strs: string[]): string[][] {
    const hashString = new Map<string, string[]>();

    for (const str of strs) {
        // Create frequency array for characters a-z (26 characters)
        const charCount = new Array(26).fill(0);
        
        // Count frequency of each character in the string
        for (const char of str) {
            charCount[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        
        // Convert frequency array to string to use as key
        const key = charCount.join('#');
        
        // Group strings with same character frequency
        if (!hashString.has(key)) {
            hashString.set(key, []);
        }
        hashString.get(key)!.push(str);
    }
    
    return Array.from(hashString.values());
}

function topKFrequentUsingBucketSort(nums: number[], k: number): number[] {
    const map = new Map<number, number>();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const bucket = new Array(nums.length + 1).fill(0);
    for (const [num, freq] of map.entries()) {
        bucket[freq] = (bucket[freq] || []).concat(num);
    }
    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }
    }

    return result;
}
export { 
    minValueInArray, 
    maxValueInArray, 
    twoSum, 
    removeDuplicates, 
    searchInsert, 
    pluseOne, 
    mergeSortArrays, 
    numberOfSubArraySum, 
    getIndexOfSum,
    getSumOfIndex,
    groupAnagrams
};