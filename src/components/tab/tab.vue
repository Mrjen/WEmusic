<template>
<div class="tab">
	<router-link tag="div" class="tab-item" to="/recommend">
		<span class="tab-link">推荐</span>
	</router-link>
	<router-link tag="div" class="tab-item" to="/singer">
		<span class="tab-link">歌手</span>
	</router-link>
	<router-link tag="div" class="tab-item" to="/rank">
		<span class="tab-link">排行</span>
	</router-link>
	<router-link tag="div" class="tab-item" to="/search">
		<span class="tab-link">搜索</span>
	</router-link>
</div>	
</template>

<script>
export default{

}
</script>

<style scope>
.tab{
	width: 100%;
	height: .9rem;
	display: flex;
}

.tab .tab-item{
	flex:1;
	text-align: center;
	line-height: .9rem;
	color: #fff;
}

.tab .tab-item.router-link-active{
	color: #FBE969;
    border-bottom:2px solid #FBE969;
}
</style>