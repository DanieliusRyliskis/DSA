# l, r = 0, len(nums) - 1
#
# while l < r:
# 	m = l + (r - l) // 2
# 	# >= bisect_left 
# 	# > bisect_right 
# 	if nums[m] >= target:
#         Keep this portion because it might contain the answer
# 		r = m
# 	else: 
# 		# Next point is when earliest true point could be located 
# 		l = m + 1
# return l if nums and nums[l] == target else -1
