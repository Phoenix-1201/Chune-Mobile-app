### Factors
- Use `ESlint`
- Use `Prettier`
- Use `semicolons`
- tabSize is 2
- Do not change `.pretterrc.js` and `.eslintrc.js`
- Define environment variables in `.env`.

    See how to use this in [react-native-config](https://github.com/luggit/react-native-config)
    
    For production, create `.env.production` and change `.env` file path before running bundling script 


### Writing Unit Tests

Check [jest](https://jestjs.io/en/) and [jest api](https://jestjs.io/docs/en/api)

### Using Patch Package
Do not use forked library when possible and use patch-package 

### Modules Structuring & Definition
- `src` folder is `@` named module.
- Define subtle exports & components in `index.ts(.tsx)`
  
  - Small utility functions will go into `utils/index.ts`
  - Categorized utilities like `Date`, `AsyncStorage` should be placed into separate file or directory like `utils/AsyncStorage.ts` & `utils/DateUtil.ts`
  - Same rule applies to components, hooks and so on
  
- For component composed with several sub-components, create a directory for it, define the main component in `index.tsx` and define other subcomponents under the same directory.
- Define styled components in other file and export, so `index.tsx` file should be looking clean.
- The rule above also applies to defining screen components.

  For example, when defining SignIn screen, following folder structure should work
  
      - src
          - screens
              - SignIn
                  - index.tsx
                  - Methods.ts
                  - <OtherComponent>.tsx
  
  - `index.tsx` will define the main component.
  
- Component definition
  
      // This is bad
      export default Component = observer((props) => (<Container>...<Container/>)`
            
      // This is good           
      const Component = (props) => (<Container>...</Container>)
      export default withTheme(connect(observer(Component))) // separate HOC with component definition
        
  - use `observer()` when exactly needed, do not overuse it
  
  - When using styled-components, do not write `backgroundColor:white;`, must write `background-color:white;`, because prettier will rename `backgroundColor` to `backgroundcolor` and cause the error
  - Do not use styled from `styled-components/native`, use `@/styles/styled-components`
           

### GraphQL
  - Define mutations in `gql/Mutaions.ts`
  - Define queries in `gql/Queries.ts`
  - Define subscriptions in `gql/Subscriptions.ts`
  - Use fragments if possible (if the same is used in more than 2 queries or mutations). Define them in `gql/Fragments.ts`
  - Use `export const` or `export function`, no default exports, no single object export like `export default Mutations`
  - Use `hook` for Mutations, Subscriptions, Queries.
  
  
  

### Navigation

   - Do not use hard-coded strings
   
       - Parameter Keys are defined in `src/constants/Navigation.js/ParamKeys`
       - Screen names are defined in `src/constants/Navigation.js/Screens`
       
   - Passing Params Between Screens
       
       - Use `useCreateNavContext()` to create navigation context
       - Use `useNavigateWithContext()` to navigate 
       - Use `useNavContext()` to get current navigation context in other navigated screens
       - These functions exist in `src/hooks/index.js`
       
### Refreshing Data      
   - Use `src/mobx/Flag` to flag & subscribe to refresh data. Global store has already has flags and flags can be added there.
   - Use `flag.signal(params)` to signal flag (e.g. updateOrder, ...)
   - Use `useFlagEffect(flag, handler)` to subscribe flag changes.  here handler might be `refetch` of `useQuery`
   
   
### Coding Guidelines
   - Use `alias` to import dependencies
        
        Our prefix for alias is `~`
        
        All sub directories in `src` folder are alias modules
        
        They are defined in `.babelrc`
        
        IDE integration is good for productivity of code. 
        
        - For `Visual Studio Code`, create / update tsconfig or jsconfig and add compilerOptions to make hyperclick functionality working.
        - For `Atom`, use js-hyperclick custom module resolver
        - For `Webstorm`, check `webstorm.config.js` to see how to make `intellisense` work.
        
   - Avoid using global dependencies
   
       - Define dependencies for the app in one place.
       
         `ApolloClient` is created in `App.ts`
         
         `Stores` is created in `stores/index.ts`
       
             // These seem to be not good, leads trouble when need 2 instances
             import Api from '@/services/Api`
             import CartStore from `@/stores/CartStore`
             
             
             // This is better
             const api = useApi();
             const apiOther = useApiOther();
             const cart = useCart();
             const eventCart = useEventCart();
             
             
   - Functional Components
   
     Write all components using `Functional` components & `hooks`
     
     - Understanding of useRef & useImperativeHandle  (This lets you do all what you could do in `Class` components)
     
     - Understanding of useEffect & useMemo & useCallback
     
     - Try to optimize the `render()` function of `Functional` component
     
     - [conditionally firing effect](https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect)
     
     - Avoid defining so many lambdas or functions in `render()` function if possible
     
       - Do those outside of `Functional` component as much as possible, or define functions in `useEffect`
       
     - Consider using `useMemo` and `useCallback` when possible
       
     - Put correct dependencies in deps array
      
     
     
         
         
         
   

   

        

  
       
            
       
