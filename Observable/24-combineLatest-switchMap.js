/*
Callback Hell
this.activatedRoute.params.subscribe(() => {
  this.httpClient.get('/users/' + params.id).subscribe((user) => {
    console.log(user);
  });
});

this.activatedRoute.params.pipe(
  combineLatest((params) => this.httpClient.get('/users/' + params.id))
).subscribe((user) => {

});
*/

// ----------1-------------2------3------
//           req(user1)   
//                         req(user2)
//                                req(user3)
// ---------------({id:1})------------({id:3})-----({id:2})---


/*
this.activatedRoute.params.pipe(
  switchMap((params) => this.httpClient.get('/users/' + params.id))
).subscribe((user) => {

});
*/

// ----------1-------------2------3------
//           req(user1)   
//                         req(user2)
//                                req(user3)
// ---------------({id:1})------------({id:3})---------------