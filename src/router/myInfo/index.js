export default{
	path: '/userProfile',
	name: 'userProfile',
	component: ()=> import('@/view/fkgHome'),//@为src路径
	children:[
		{
			path: 'home',
			component: ()=> import('@/view/pages/profile/userProfile.vue')
		},
		{
			path: '/userProfile',
			redirect: '/userProfile/home'
		}
	]
}