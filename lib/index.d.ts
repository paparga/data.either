type eCata<S, E, P> = {
  Left: (n:E) => S;
  Right: (j: P) => S
}

declare class Either<E,V> {

  //Comparing and testing
  isLeft: boolean
  isRight: boolean
  isEqual(a: Either<E, V>): boolean      

  //Constructing
  static of<E,S>(a: S): Either<E,S>
  static Right<E,S>(a: S): Either<E,S>
  static Left<S,V>(a: S): Either<S,V>
    
  //Transforming
  map<S>(fn: (t: V) => S): Either<E,S>
  chain<S>(fn: (t: V) => Either<E,S>): Either<E,S> 
  orElse<F>(fn: (t: E) => Either<F,V>): Either<F,V>
  leftMap<F>(fn: (t: E) => F): Either<F,V>

  //Map N
  map2<S, N>(fn: (t1: V, t2: N) => S, n2: Either<E,N>): Either<E,S>  
  map3<S, N, O>(fn: (t1: V, t2: N, t3: O) => S, n2: Either<E,N>, n3: Either<E,O>): Either<E,S>  
  map4<S, N, O, P>(fn: (t1: V, t2: N, t3: O, t4: P) => S, n2: Either<E,N>, n3: Either<E,O>, n4: Either<E,P>): Either<E,S>  
  map5<S, N, O, P, Q>(fn: (t1: V, t2: N, t3: O, t4: P, t5: Q) => S, n2: Either<E,N>, n3: Either<E,O>, n4: Either<E,P>, n5: Either<E,Q>): Either<E,S>
  
  //Extracting
  getOrElse(a: V): V
  get(): V
  getLeft(): E
  fold<S>(cbLeft: (n: E) => S, cbRight: (j:V) => S ): S 
  cata<S>(fnG: eCata<S,E,V>): S  
    
}

declare module "data.either" {
	export = Either
}

