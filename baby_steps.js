
var nums = process.argv;

var sum = 0;
for (var i = 2; i < nums.length; i++)
{
	sum = sum + parseInt(nums[i]);
}

console.log(sum);