import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';

export default state =>
  state.pipe(
    distinctUntilChanged()
  ).subscribe(state => console.log(state));
