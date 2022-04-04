export default {
  path: "/fkgHome",
  name: "fkgHome",
  component: () => import("@/view/fkgHome"), //@为src路径
  children: [
    {
      path: "home",
      component: () => import("@/view/fkgPages/Home")
    },
    {
      path: "lawLibrary",
      component: () => import("@/view/fkgPages/LawLibrary"),
      beforeEnter: (to, from, next) => {
        console.log(from);
        to.meta.keepAlive = true;
        next();
      }
    },
    {
      path: "lawSearch",
      component: () => import("@/view/fkgPages/LawSearch"),
      beforeEnter: (to, from, next) => {
        console.log(from);
        to.meta.keepAlive = true;
        next();
      }
    },
    {
      path: "punishmentLibrary",
      component: () => import("@/view/fkgPages/PunishmentLibrary"),
      beforeEnter: (to, from, next) => {
        console.log(from);
        to.meta.keepAlive = true;
        next();
      }
    },
    {
      path: "punishmentSearch",
      component: () => import("@/view/fkgPages/PunishmentSearch"),
      beforeEnter: (to, from, next) => {
        if (from.path == "/fkgHome/home") {
          to.meta.keepAlive = false;
        } else {
          to.meta.keepAlive = true;
        }
        next();
      }
    },
    {
      path: "eventsView",
      component: () => import("@/view/fkgPages/EventsView"),
      beforeEnter: (to, from, next) => {
        console.log(from);
        to.meta.keepAlive = true;
        next();
      }
    },
    {
      path: "eventsSearch",
      component: () => import("@/view/fkgPages/EventsSearch"),
      beforeEnter: (to, from, next) => {
        if (from.path == "/fkgHome/home") {
          to.meta.keepAlive = false;
        } else {
          to.meta.keepAlive = true;
        }
        next();
      }
    },
    {
      path: "oneEventSearch",
      component: () => import("@/view/fkgPages/OneEventSearch"),
      beforeEnter: (to, from, next) => {
        if (from.path == "/fkgHome/home") {
          to.meta.keepAlive = false;
        } else {
          to.meta.keepAlive = true;
        }
        next();
      }
    },

    {
      path: "myAttention",
      component: () => import("@/view/fkgPages/MyAttention"),
      beforeEnter: (to, from, next) => {
        console.log(from);
        to.meta.keepAlive = true;
        next();
      }
    },
    {
      path: "lawDetail/:lawId",
      components: {
        default: () => import("@/view/fkgPages/LawDetail")
      },
      props: {
        default: true
      }
    },
    {
      path: "punishmentDetail/:punishmentId",
      component: () => import("@/view/fkgPages/PunishmentDetail"),
      props: true
    },
    {
      path: "eventDetail/:eventId",
      component: () => import("@/view/fkgPages/EventDetail"),
      props: true
    },
    {
      path: "oneEventDetail/:eventId",
      component: () => import("@/view/fkgPages/OneEventDetail"),
      props: true
    },

    {
      path: "/fkgHome",
      redirect: "/fkgHome/home"
    },
    {
      path: "newsDetail/:newsId",
      component: () => import("@/view/fkgPages/NewsDetail"),
      props: true
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
};
