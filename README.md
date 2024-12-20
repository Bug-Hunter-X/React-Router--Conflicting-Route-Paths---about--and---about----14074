# React Router Conflicting Route Paths
This repository demonstrates a common issue in React Router v6 where conflicting route paths can lead to unexpected routing behavior.  Specifically, the problem arises from defining routes with overlapping paths, such as '/about' and '/about/*'.  The wildcard route ('/about/*') will always match first, effectively making the '/about' route unreachable.

## Problem
The provided `App.js` contains two routes:

- `/about`
- `/about/*`

The intent is to have a specific route for `/about` and a wildcard route for nested paths under `/about`. However, the wildcard path overshadows the specific path.  Navigating to `/about` will incorrectly render the content intended for `/about/*`, preventing the specific `/about` route from ever being used.

## Solution
The solution involves re-ordering the routes or using more specific paths to avoid the overlap. The `bugSolution.js` file shows the corrected implementation.