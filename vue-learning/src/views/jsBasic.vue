<template>
  <div class="jsBasic">
  </div>
</template>

<script>

export default {
 	name: 'jsBasic',
 	data: function() {
  		return {
  			message: ''
  		}
  },
 	methods: {
    // js浅拷贝深拷贝
    // 浅拷贝
    赋值，数组的slice方法
    // 深拷贝
    // JSON.parse() 和 JSON.stringify();
    deepClone (obj) {
      let result = Array.isArray(obj) ? [] : {};
      if (obj && typeof obj === "object") {
        for (let key in obj) {
          if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === "object") {
              result[key] = deepClone(obj[key]);
            } else {
              result[key] = obj[key]
            }
          }
        }
      }
      return result;
    }
	},
}
</script>
