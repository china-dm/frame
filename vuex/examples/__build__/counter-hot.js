webpackJsonp([4],{303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(e){return(0,e.commit)("increment")},t.decrement=function(e){return(0,e.commit)("decrement")},t.incrementIfOdd=function(e){var t=e.commit;(e.state.count+1)%2==0&&t("increment")},t.incrementAsync=function(e){var t=e.commit;setTimeout(function(){t("increment")},1e3)}},304:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.count=function(e){return e.count},t.recentHistory=function(e){var t=e.history.length,n=t-5<0?0:t-5;return e.history.slice(n,t).toString().replace(/,/g,", ")}},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(e){e.count++,e.history.push("increment")},t.decrement=function(e){e.count--,e.history.push("decrement")}},316:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var c=n(115),o=r(c),u=n(328),i=r(u),s=n(367),f=r(s);new o.default({el:"#app",store:i.default,render:function(e){return e(f.default)}})},328:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function c(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(115),u=c(o),i=n(85),s=c(i),f=n(304),a=r(f),d=n(303),l=r(d),m=n(305),_=r(m);u.default.use(s.default);var v={count:0,history:[]},p=new s.default.Store({state:v,getters:a,actions:l,mutations:_});e.hot.accept([304,303,305],function(){p.hotUpdate({getters:n(304),actions:n(303),mutations:n(305)})}),t.default=p},343:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(85);t.default={computed:(0,r.mapGetters)(["count","recentHistory"]),methods:(0,r.mapActions)(["increment","decrement","incrementIfOdd","incrementAsync"])}},367:function(e,t,n){var r=n(86)(n(343),n(385),null,null);e.exports=r.exports},385:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Value: "+e._s(e.count)+"\n  "),n("button",{on:{click:e.increment}},[e._v("+")]),e._v(" "),n("button",{on:{click:e.decrement}},[e._v("-")]),e._v(" "),n("button",{on:{click:e.incrementIfOdd}},[e._v("Increment if odd")]),e._v(" "),n("button",{on:{click:e.incrementAsync}},[e._v("Increment async")]),e._v(" "),n("div",[n("div",[e._v("Recent History (last 5 entries): "+e._s(e.recentHistory))])])])},staticRenderFns:[]}},391:function(e,t,n){n(116),e.exports=n(316)}},[391]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vY291bnRlci1ob3QuanMiLCJ3ZWJwYWNrOi8vLy4vY291bnRlci1ob3Qvc3RvcmUvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9zdG9yZS9nZXR0ZXJzLmpzIiwid2VicGFjazovLy8uL2NvdW50ZXItaG90L3N0b3JlL211dGF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jb3VudGVyLWhvdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY291bnRlci1ob3Qvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0NvdW50ZXIudnVlP2NjMmQiLCJ3ZWJwYWNrOi8vLy4vY291bnRlci1ob3QvQ291bnRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY291bnRlci1ob3QvQ291bnRlci52dWU/ZWQzMiJdLCJuYW1lcyI6WyJ3ZWJwYWNrSnNvbnAiLCIzMDMiLCJtb2R1bGUiLCJleHBvcnRzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpbmNyZW1lbnQiLCJfcmVmIiwiY29tbWl0IiwiZGVjcmVtZW50IiwiX3JlZjIiLCJpbmNyZW1lbnRJZk9kZCIsIl9yZWYzIiwic3RhdGUiLCJjb3VudCIsImluY3JlbWVudEFzeW5jIiwiX3JlZjQiLCJzZXRUaW1lb3V0IiwiMzA0IiwicmVjZW50SGlzdG9yeSIsImVuZCIsImhpc3RvcnkiLCJsZW5ndGgiLCJiZWdpbiIsInNsaWNlIiwidG9TdHJpbmciLCJyZXBsYWNlIiwiMzA1IiwicHVzaCIsIjMxNiIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGVmYXVsdCIsIl92dWUiLCJfdnVlMiIsIl9zdG9yZSIsIl9zdG9yZTIiLCJfQ291bnRlciIsIl9Db3VudGVyMiIsImVsIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiMzI4IiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJuZXdPYmoiLCJrZXkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJfdnVleCIsIl92dWV4MiIsIl9nZXR0ZXJzIiwiZ2V0dGVycyIsIl9hY3Rpb25zIiwiYWN0aW9ucyIsIl9tdXRhdGlvbnMiLCJtdXRhdGlvbnMiLCJ1c2UiLCJTdG9yZSIsImhvdCIsImFjY2VwdCIsImhvdFVwZGF0ZSIsIjM0MyIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwiMzY3IiwiQ29tcG9uZW50IiwiMzg1IiwiX3ZtIiwidGhpcyIsIl9oIiwiJGNyZWF0ZUVsZW1lbnQiLCJfYyIsIl9zZWxmIiwiX3YiLCJfcyIsIm9uIiwiY2xpY2siLCJzdGF0aWNSZW5kZXJGbnMiLCIzOTEiXSwibWFwcGluZ3MiOiJBQUFBQSxjQUFjLElBRVJDLElBQ0EsU0FBVUMsRUFBUUMsRUFBU0MsR0FFakMsWUFHQUMsUUFBT0MsZUFBZUgsRUFBUyxjQUM3QkksT0FBTyxHQ1RJQyxhQUFZLFNBQUFDLEdBQUEsT0FBZ0JDLEVBQWhCRCxFQUFHQyxRQUFvQixjQUNuQ0MsWUFBWSxTQUFBQyxHQUFBLE9BQWdCRixFQUFoQkUsRUFBR0YsUUFBb0IsY0FFbkNHLGlCQUFpQixTQUFBQyxHQUF1QixHQUFwQkosR0FBb0JJLEVBQXBCSixRQUFvQkksRUFBWkMsTUFDNUJDLE1BQVEsR0FBSyxHQUFNLEdBQzVCTixFQUFPLGNBSUVPLGlCQUFpQixTQUFBQyxHQUFnQixHQUFiUixHQUFhUSxFQUFiUixNQUMvQlMsWUFBVyxXQUNUVCxFQUFPLGNBQ04sT0QyQkNVLElBQ0EsU0FBVWxCLEVBQVFDLEVBQVNDLEdBRWpDLFlBR0FDLFFBQU9DLGVBQWVILEVBQVMsY0FDN0JJLE9BQU8sR0U5Q0lTLFNBQVEsU0FBQUQsR0FBQSxNQUFTQSxHQUFNQyxPQUl2QkssZ0JBQWdCLFNBQUFOLEdBQzNCLEdBQU1PLEdBQU1QLEVBQU1RLFFBQVFDLE9BQ3BCQyxFQUFRSCxFQUpGLEVBSWdCLEVBQUksRUFBSUEsRUFKeEIsQ0FLWixPQUFPUCxHQUFNUSxR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QUFBUCxFQUFBMUQsT0FBQSxRQUFBOEQsRUFBQSxVQUNBSSxJQUNBQyxNQUFBVCxFQUFBbEUsYUFFR2tFLEVBQUFNLEdBQUEsT0FBQU4sRUFBQU0sR0FBQSxLQUFBRixFQUFBLFVBQ0hJLElBQ0FDLE1BQUFULEVBQUEvRCxhQUVHK0QsRUFBQU0sR0FBQSxPQUFBTixFQUFBTSxHQUFBLEtBQUFGLEVBQUEsVUFDSEksSUFDQUMsTUFBQVQsRUFBQTdELGtCQUVHNkQsRUFBQU0sR0FBQSxzQkFBQU4sRUFBQU0sR0FBQSxLQUFBRixFQUFBLFVBQ0hJLElBQ0FDLE1BQUFULEVBQUF6RCxrQkFFR3lELEVBQUFNLEdBQUEscUJBQUFOLEVBQUFNLEdBQUEsS0FBQUYsRUFBQSxPQUFBQSxFQUFBLE9BQUFKLEVBQUFNLEdBQUEsb0NBQUFOLEVBQUFPLEdBQUFQLEVBQUFyRCx1QkFDRitELHFCUndPS0MsSUFDQSxTQUFVbkYsRUFBUUMsRUFBU0MsR0FFakNBLEVBQW9CLEtBQ3BCRixFQUFPQyxRQUFVQyxFQUFvQixRQUtsQyIsImZpbGUiOiJjb3VudGVyLWhvdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIndlYnBhY2tKc29ucChbNF0se1xuXG4vKioqLyAzMDM6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG52YXIgaW5jcmVtZW50ID0gZXhwb3J0cy5pbmNyZW1lbnQgPSBmdW5jdGlvbiBpbmNyZW1lbnQoX3JlZikge1xuICB2YXIgY29tbWl0ID0gX3JlZi5jb21taXQ7XG4gIHJldHVybiBjb21taXQoJ2luY3JlbWVudCcpO1xufTtcbnZhciBkZWNyZW1lbnQgPSBleHBvcnRzLmRlY3JlbWVudCA9IGZ1bmN0aW9uIGRlY3JlbWVudChfcmVmMikge1xuICB2YXIgY29tbWl0ID0gX3JlZjIuY29tbWl0O1xuICByZXR1cm4gY29tbWl0KCdkZWNyZW1lbnQnKTtcbn07XG5cbnZhciBpbmNyZW1lbnRJZk9kZCA9IGV4cG9ydHMuaW5jcmVtZW50SWZPZGQgPSBmdW5jdGlvbiBpbmNyZW1lbnRJZk9kZChfcmVmMykge1xuICB2YXIgY29tbWl0ID0gX3JlZjMuY29tbWl0LFxuICAgICAgc3RhdGUgPSBfcmVmMy5zdGF0ZTtcblxuICBpZiAoKHN0YXRlLmNvdW50ICsgMSkgJSAyID09PSAwKSB7XG4gICAgY29tbWl0KCdpbmNyZW1lbnQnKTtcbiAgfVxufTtcblxudmFyIGluY3JlbWVudEFzeW5jID0gZXhwb3J0cy5pbmNyZW1lbnRBc3luYyA9IGZ1bmN0aW9uIGluY3JlbWVudEFzeW5jKF9yZWY0KSB7XG4gIHZhciBjb21taXQgPSBfcmVmNC5jb21taXQ7XG5cbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgY29tbWl0KCdpbmNyZW1lbnQnKTtcbiAgfSwgMTAwMCk7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzA0OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xudmFyIGNvdW50ID0gZXhwb3J0cy5jb3VudCA9IGZ1bmN0aW9uIGNvdW50KHN0YXRlKSB7XG4gIHJldHVybiBzdGF0ZS5jb3VudDtcbn07XG5cbnZhciBsaW1pdCA9IDU7XG5cbnZhciByZWNlbnRIaXN0b3J5ID0gZXhwb3J0cy5yZWNlbnRIaXN0b3J5ID0gZnVuY3Rpb24gcmVjZW50SGlzdG9yeShzdGF0ZSkge1xuICB2YXIgZW5kID0gc3RhdGUuaGlzdG9yeS5sZW5ndGg7XG4gIHZhciBiZWdpbiA9IGVuZCAtIGxpbWl0IDwgMCA/IDAgOiBlbmQgLSBsaW1pdDtcbiAgcmV0dXJuIHN0YXRlLmhpc3Rvcnkuc2xpY2UoYmVnaW4sIGVuZCkudG9TdHJpbmcoKS5yZXBsYWNlKC8sL2csICcsICcpO1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIDMwNTpcbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbnZhciBpbmNyZW1lbnQgPSBleHBvcnRzLmluY3JlbWVudCA9IGZ1bmN0aW9uIGluY3JlbWVudChzdGF0ZSkge1xuICBzdGF0ZS5jb3VudCsrO1xuICBzdGF0ZS5oaXN0b3J5LnB1c2goJ2luY3JlbWVudCcpO1xufTtcblxudmFyIGRlY3JlbWVudCA9IGV4cG9ydHMuZGVjcmVtZW50ID0gZnVuY3Rpb24gZGVjcmVtZW50KHN0YXRlKSB7XG4gIHN0YXRlLmNvdW50LS07XG4gIHN0YXRlLmhpc3RvcnkucHVzaCgnZGVjcmVtZW50Jyk7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzE2OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG52YXIgX3Z1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTE1KTtcblxudmFyIF92dWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlKTtcblxudmFyIF9zdG9yZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzI4KTtcblxudmFyIF9zdG9yZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zdG9yZSk7XG5cbnZhciBfQ291bnRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMzY3KTtcblxudmFyIF9Db3VudGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NvdW50ZXIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5uZXcgX3Z1ZTIuZGVmYXVsdCh7XG4gIGVsOiAnI2FwcCcsXG4gIHN0b3JlOiBfc3RvcmUyLmRlZmF1bHQsXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKGgpIHtcbiAgICByZXR1cm4gaChfQ291bnRlcjIuZGVmYXVsdCk7XG4gIH1cbn0pO1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzI4OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3Z1ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTE1KTtcblxudmFyIF92dWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdnVlKTtcblxudmFyIF92dWV4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NSk7XG5cbnZhciBfdnVleDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF92dWV4KTtcblxudmFyIF9nZXR0ZXJzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMDQpO1xuXG52YXIgZ2V0dGVycyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9nZXR0ZXJzKTtcblxudmFyIF9hY3Rpb25zID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMDMpO1xuXG52YXIgYWN0aW9ucyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9hY3Rpb25zKTtcblxudmFyIF9tdXRhdGlvbnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwNSk7XG5cbnZhciBtdXRhdGlvbnMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfbXV0YXRpb25zKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7IGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHsgcmV0dXJuIG9iajsgfSBlbHNlIHsgdmFyIG5ld09iaiA9IHt9OyBpZiAob2JqICE9IG51bGwpIHsgZm9yICh2YXIga2V5IGluIG9iaikgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkgbmV3T2JqW2tleV0gPSBvYmpba2V5XTsgfSB9IG5ld09iai5kZWZhdWx0ID0gb2JqOyByZXR1cm4gbmV3T2JqOyB9IH1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuX3Z1ZTIuZGVmYXVsdC51c2UoX3Z1ZXgyLmRlZmF1bHQpO1xuXG52YXIgc3RhdGUgPSB7XG4gIGNvdW50OiAwLFxuICBoaXN0b3J5OiBbXVxufTtcblxudmFyIHN0b3JlID0gbmV3IF92dWV4Mi5kZWZhdWx0LlN0b3JlKHtcbiAgc3RhdGU6IHN0YXRlLFxuICBnZXR0ZXJzOiBnZXR0ZXJzLFxuICBhY3Rpb25zOiBhY3Rpb25zLFxuICBtdXRhdGlvbnM6IG11dGF0aW9uc1xufSk7XG5cbmlmICh0cnVlKSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KFszMDQsIDMwMywgMzA1XSwgZnVuY3Rpb24gKCkge1xuICAgIHN0b3JlLmhvdFVwZGF0ZSh7XG4gICAgICBnZXR0ZXJzOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwNCksXG4gICAgICBhY3Rpb25zOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwMyksXG4gICAgICBtdXRhdGlvbnM6IF9fd2VicGFja19yZXF1aXJlX18oMzA1KVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0cy5kZWZhdWx0ID0gc3RvcmU7XG5cbi8qKiovIH0pLFxuXG4vKioqLyAzNDM6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfdnVleCA9IF9fd2VicGFja19yZXF1aXJlX18oODUpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIGNvbXB1dGVkOiAoMCwgX3Z1ZXgubWFwR2V0dGVycykoWydjb3VudCcsICdyZWNlbnRIaXN0b3J5J10pLFxuICBtZXRob2RzOiAoMCwgX3Z1ZXgubWFwQWN0aW9ucykoWydpbmNyZW1lbnQnLCAnZGVjcmVtZW50JywgJ2luY3JlbWVudElmT2RkJywgJ2luY3JlbWVudEFzeW5jJ10pXG59OyAvL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuLy9cbi8vXG4vL1xuXG4vKioqLyB9KSxcblxuLyoqKi8gMzY3OlxuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgQ29tcG9uZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NikoXG4gIC8qIHNjcmlwdCAqL1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0MyksXG4gIC8qIHRlbXBsYXRlICovXG4gIF9fd2VicGFja19yZXF1aXJlX18oMzg1KSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cbi8qKiovIH0pLFxuXG4vKioqLyAzODU6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2JywgW192bS5fdihcIlxcbiAgVmFsdWU6IFwiICsgX3ZtLl9zKF92bS5jb3VudCkgKyBcIlxcbiAgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbmNyZW1lbnRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIrXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmRlY3JlbWVudFxuICAgIH1cbiAgfSwgW192bS5fdihcIi1cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5jcmVtZW50SWZPZGRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJJbmNyZW1lbnQgaWYgb2RkXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmluY3JlbWVudEFzeW5jXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSW5jcmVtZW50IGFzeW5jXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCBbX2MoJ2RpdicsIFtfdm0uX3YoXCJSZWNlbnQgSGlzdG9yeSAobGFzdCA1IGVudHJpZXMpOiBcIiArIF92bS5fcyhfdm0ucmVjZW50SGlzdG9yeSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5cbi8qKiovIH0pLFxuXG4vKioqLyAzOTE6XG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMTE2KTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMTYpO1xuXG5cbi8qKiovIH0pXG5cbn0sWzM5MV0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjb3VudGVyLWhvdC5qcyIsImV4cG9ydCBjb25zdCBpbmNyZW1lbnQgPSAoeyBjb21taXQgfSkgPT4gY29tbWl0KCdpbmNyZW1lbnQnKVxyXG5leHBvcnQgY29uc3QgZGVjcmVtZW50ID0gKHsgY29tbWl0IH0pID0+IGNvbW1pdCgnZGVjcmVtZW50JylcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRJZk9kZCA9ICh7IGNvbW1pdCwgc3RhdGUgfSkgPT4ge1xyXG4gIGlmICgoc3RhdGUuY291bnQgKyAxKSAlIDIgPT09IDApIHtcclxuICAgIGNvbW1pdCgnaW5jcmVtZW50JylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZW1lbnRBc3luYyA9ICh7IGNvbW1pdCB9KSA9PiB7XHJcbiAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICBjb21taXQoJ2luY3JlbWVudCcpXHJcbiAgfSwgMTAwMClcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3VudGVyLWhvdC9zdG9yZS9hY3Rpb25zLmpzIiwiZXhwb3J0IGNvbnN0IGNvdW50ID0gc3RhdGUgPT4gc3RhdGUuY291bnRcclxuXHJcbmNvbnN0IGxpbWl0ID0gNVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlY2VudEhpc3RvcnkgPSBzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZW5kID0gc3RhdGUuaGlzdG9yeS5sZW5ndGhcclxuICBjb25zdCBiZWdpbiA9IGVuZCAtIGxpbWl0IDwgMCA/IDAgOiBlbmQgLSBsaW1pdFxyXG4gIHJldHVybiBzdGF0ZS5oaXN0b3J5XHJcbiAgICAuc2xpY2UoYmVnaW4sIGVuZClcclxuICAgIC50b1N0cmluZygpXHJcbiAgICAucmVwbGFjZSgvLC9nLCAnLCAnKVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvdW50ZXItaG90L3N0b3JlL2dldHRlcnMuanMiLCJleHBvcnQgY29uc3QgaW5jcmVtZW50ID0gc3RhdGUgPT4ge1xyXG4gIHN0YXRlLmNvdW50KytcclxuICBzdGF0ZS5oaXN0b3J5LnB1c2goJ2luY3JlbWVudCcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZW1lbnQgPSBzdGF0ZSA9PiB7XHJcbiAgc3RhdGUuY291bnQtLVxyXG4gIHN0YXRlLmhpc3RvcnkucHVzaCgnZGVjcmVtZW50JylcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3VudGVyLWhvdC9zdG9yZS9tdXRhdGlvbnMuanMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCBDb3VudGVyIGZyb20gJy4vQ291bnRlci52dWUnXHJcblxyXG5uZXcgVnVlKHtcclxuICBlbDogJyNhcHAnLFxyXG4gIHN0b3JlLFxyXG4gIHJlbmRlcjogaCA9PiBoKENvdW50ZXIpXHJcbn0pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvdW50ZXItaG90L2FwcC5qcyIsImltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG5pbXBvcnQgVnVleCBmcm9tICd2dWV4J1xyXG5pbXBvcnQgKiBhcyBnZXR0ZXJzIGZyb20gJy4vZ2V0dGVycydcclxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXHJcbmltcG9ydCAqIGFzIG11dGF0aW9ucyBmcm9tICcuL211dGF0aW9ucydcclxuXHJcblZ1ZS51c2UoVnVleClcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIGNvdW50OiAwLFxyXG4gIGhpc3Rvcnk6IFtdXHJcbn1cclxuXHJcbmNvbnN0IHN0b3JlID0gbmV3IFZ1ZXguU3RvcmUoe1xyXG4gIHN0YXRlLFxyXG4gIGdldHRlcnMsXHJcbiAgYWN0aW9ucyxcclxuICBtdXRhdGlvbnNcclxufSlcclxuXHJcbmlmIChtb2R1bGUuaG90KSB7XHJcbiAgbW9kdWxlLmhvdC5hY2NlcHQoW1xyXG4gICAgJy4vZ2V0dGVycycsXHJcbiAgICAnLi9hY3Rpb25zJyxcclxuICAgICcuL211dGF0aW9ucydcclxuICBdLCAoKSA9PiB7XHJcbiAgICBzdG9yZS5ob3RVcGRhdGUoe1xyXG4gICAgICBnZXR0ZXJzOiByZXF1aXJlKCcuL2dldHRlcnMnKSxcclxuICAgICAgYWN0aW9uczogcmVxdWlyZSgnLi9hY3Rpb25zJyksXHJcbiAgICAgIG11dGF0aW9uczogcmVxdWlyZSgnLi9tdXRhdGlvbnMnKVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb3VudGVyLWhvdC9zdG9yZS9pbmRleC5qcyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgVmFsdWU6IHt7IGNvdW50IH19XHJcbiAgICA8YnV0dG9uIEBjbGljaz1cImluY3JlbWVudFwiPis8L2J1dHRvbj5cclxuICAgIDxidXR0b24gQGNsaWNrPVwiZGVjcmVtZW50XCI+LTwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBAY2xpY2s9XCJpbmNyZW1lbnRJZk9kZFwiPkluY3JlbWVudCBpZiBvZGQ8L2J1dHRvbj5cclxuICAgIDxidXR0b24gQGNsaWNrPVwiaW5jcmVtZW50QXN5bmNcIj5JbmNyZW1lbnQgYXN5bmM8L2J1dHRvbj5cclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+UmVjZW50IEhpc3RvcnkgKGxhc3QgNSBlbnRyaWVzKToge3sgcmVjZW50SGlzdG9yeSB9fTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBjb21wdXRlZDogbWFwR2V0dGVycyhbXHJcbiAgICAnY291bnQnLFxyXG4gICAgJ3JlY2VudEhpc3RvcnknXHJcbiAgXSksXHJcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXHJcbiAgICAnaW5jcmVtZW50JyxcclxuICAgICdkZWNyZW1lbnQnLFxyXG4gICAgJ2luY3JlbWVudElmT2RkJyxcclxuICAgICdpbmNyZW1lbnRBc3luYydcclxuICBdKVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gQ291bnRlci52dWU/NDcwOTlmOGIiLCJ2YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db3VudGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmU5MGQzZGVcXFwifSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ291bnRlci52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY291bnRlci1ob3QvQ291bnRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIFtfdm0uX3YoXCJcXG4gIFZhbHVlOiBcIiArIF92bS5fcyhfdm0uY291bnQpICsgXCJcXG4gIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uaW5jcmVtZW50XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiK1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5kZWNyZW1lbnRcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCItXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLmluY3JlbWVudElmT2RkXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSW5jcmVtZW50IGlmIG9kZFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5pbmNyZW1lbnRBc3luY1xuICAgIH1cbiAgfSwgW192bS5fdihcIkluY3JlbWVudCBhc3luY1wiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCBbX3ZtLl92KFwiUmVjZW50IEhpc3RvcnkgKGxhc3QgNSBlbnRyaWVzKTogXCIgKyBfdm0uX3MoX3ZtLnJlY2VudEhpc3RvcnkpKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4uL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mZTkwZDNkZVwifSEuLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NvdW50ZXItaG90L0NvdW50ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzODVcbi8vIG1vZHVsZSBjaHVua3MgPSA0Il0sInNvdXJjZVJvb3QiOiIifQ==