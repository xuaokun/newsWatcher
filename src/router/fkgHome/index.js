export default{
	path: '/fkgHome',
	name: 'fkgHome',
	component: ()=> import('@/view/fkgHome'),//@为src路径
	children:[
		{
			path: 'home',
			component: ()=> import('@/view/fkgPages/Home')
		},
		{
			path: 'lawLibrary',
			component: ()=> import('@/view/fkgPages/LawLibrary')
		},
		{
			path: 'lawSearch',
			component: ()=> import('@/view/fkgPages/LawSearch')
		},
		{
			path: 'punishmentLibrary',
			component: ()=> import('@/view/fkgPages/PunishmentLibrary')
		},
		{
			path: 'punishmentSearch',
			component: ()=> import('@/view/fkgPages/PunishmentSearch')
		},
		{
			path: 'eventsView',
			component: ()=> import('@/view/fkgPages/EventsView')
		},
		{
			path: 'eventsSearch',
			component: ()=> import('@/view/fkgPages/EventsSearch')
		},
		{
			path: 'oneEventSearch',
			component: ()=> import('@/view/fkgPages/OneEventSearch')
		},
		
		{
			path: 'myAttention',
			component: ()=> import('@/view/fkgPages/MyAttention')
		},
		{
			path: 'lawDetail/:lawId',
			components:{
				default: ()=> import('@/view/fkgPages/LawDetail'),
			},
			props:{
				default:true
			}
		},
		{
			path: 'punishmentDetail/:punishmentId',
			component: ()=> import('@/view/fkgPages/PunishmentDetail'),
			props: true
		},
		{
			path: 'eventDetail/:eventId',
			component: ()=> import('@/view/fkgPages/EventDetail'),
			props: true
		},
		{
			path: 'oneEventDetail/:eventId',
			component: ()=> import('@/view/fkgPages/OneEventDetail'),
			props: true
		},

		{
			path: '/fkgHome',
			redirect: '/fkgHome/home'
		}
		// {
		// 	path: 'nowplaying',
		// 	component: ()=> import('@/components/NowPlaying')
		// },
		// {
		// 	path: 'comingsoon',
		// 	component: ()=> import('@/components/ComingSoon')
		// },
		// {
		// 	path: 'search',
		// 	component: ()=> import('@/components/Search')
		// },
		// {
		// 	path:'detail/1/:movieId',
		// 	components:{
		// 		default: ()=>import('@/components/NowPlaying'),
		// 		detail: ()=>import('@/views/Movie/detail')
		// 	},
		// 	props:{
		// 		detail:true
		// 	}
		// },
		// {
		// 	path:'detail/2/:movieId',
		// 	components:{
		// 		default: ()=>import('@/components/ComingSoon'),
		// 		detail: ()=>import('@/views/Movie/detail')
		// 	},
		// 	props:{
		// 		detail:true
		// 	}
		// },
		// {
		// 	path: '/movie',
		// 	redirect: '/movie/nowplaying'
		// }
	]
}