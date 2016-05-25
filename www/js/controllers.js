angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope) {
})

.controller('DayCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('WeekCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('MonthCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('AddCtrl', function($scope, ionicDatePicker){
	$scope.mData = {};//数据对象
	$scope.mData.slTime = new Date().getTime();
	$scope.mData.expend;

	$scope.$watch('mData.expend', function(){
		if($scope.mData.expend>0){
			$scope.mData.expend = Number($scope.mData.expend).toFixed(2);
		}
	})

	//日期选择器
    var ipObj1 = {
      callback: function (val) {  //Mandatory
	  	$scope.mData.slTime = val;
		console.log($scope.mData.slTime);
      },
      from: new Date(2016, 1, 1), //Optional
      to: new Date(2050, 1, 1), //Optional
      inputDate: new Date(),      //Optional
      setLabel: '确定',
      todayLabel: '今天',
      closeLabel: '关闭',
      showTodayButton: false,
      mondayFirst: false,          //Optional
      disableWeekdays: [],       //Optional
      closeOnSelect: false,       //Optional
      templateType: 'popup'       //Optional
    };

    $scope.openDatePicker = function(){
      ionicDatePicker.openDatePicker(ipObj1);
    };
})

