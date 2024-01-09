export default {
  map: `
let rec map f lst =
  switch lst =>
  | [] -> []
  | h :: t -> f h :: map f t
  end
  `,
  mapType: `
map = (a -> b) -> [a] -> [b] : function
  `,
  option: `
type Option a =
  | None
  | Just (a)
  `,
  optionType: `
Option: * -> *
  `,
  tree: `
type Tree a =
  | Leaf
  | Node (a, Tree a, Tree a)
  `,
  treeType: `
Tree: * -> *
  `,
  app: `
type App a b = a b
  `,
  appType: `
App: (* -> *) -> * -> *
  `,
  app2: `
type App2 a b c d = a (b c d)
`,
  app2Type: `
App2: (* -> *)
-> (* -> * -> *) -> * -> * -> *`,

  optionBind: `
/* Monadic application */
let (>>=) x f =
  switch x =>
  | None -> None
  | Just a -> f a
  end
`,
  optionBindType: `
(>>=) = Option a
-> (a -> Option b) -> Option b : function
`,

  optionReturn: `
/* Trivial transformation */
let return = Just
`,
  optionReturnType: `
return = a -> Option a : function
`,

  infix1: `
let (-->) x f = f x
`,
  infix1Type: `
(-->) = a -> (a -> b) -> b : function
`,

  infix2: `
let (<=>) f g = \\x -> f (g x)
`,
  infix2Type: `
(<=>) = (b -> c)
-> (a -> b) -> a -> c : function
`,

  infix3: `
let rec (---) a b =
  if a > b then []
  else a :: (a + 1) --- b
`,

  infix3Type: `
(---) = Int -> Int -> [Int] : function
`,

  foo: `
let foo a b c d e = a ( b c + 1) (d e)
`,
  fooType: `\nfoo = (Int -> a -> b) -> (c -> Int) 
  -> c -> (d -> a) -> d -> b = function`,

  foo2: `
let f x y z = x (y z)
`,
  foo2Type: `
f = (a -> b)
-> (c -> a) -> c -> b : function
`,


}