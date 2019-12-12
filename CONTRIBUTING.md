# How to contribute

* Define new TypeScript types.
* Define new functions.
* Define new classes.
* Edit documentation.
* Propose new build stages and tools.

## Create an issue or pull request

Feel free to create issues and pull requests with any kind of proposals and enhancements you have. **All issues and prs will be reviewed and answered/merged/rejected**.

## Code conventions

### Commit names
All commit names should follow [conventional-commits protocol](https://www.conventionalcommits.org/en/v1.0.0/).

### Project structure
All source code resides in `lib` directory.
* `/lib`
    * `/runtime` - only runtime functionality
    * `/types` - only type definitions
        * `<dir>.ts` - nested directory for complicated categories
            * `index.ts`
            * `<category>.ts`
        * `<category>.ts` - contains type definitions that may categorised as `<category>`
        * `index.ts ` - reexports all modules from current directory
* `/test`
    * `types-test.ts` - test type definitions here
    * `mocks.ts` - contains mock interfaces, types and values
    * `tests.ts` - test runtime functions with `chai` and `mocha` here

Add your code to the proper directory. *You may create new subdirectories and/or files if it makes sense*, otherwise feel free to edit existing files.

Files are named to categorize their functional units in order to divide one big file into a neat tree structure. It is not that important how you name files and directories (but use dash as a word separator, i.e. `kebab-case`).

### Producing functional units

**Everything must be documented with [typedoc](https://github.com/TypeStrong/typedoc)** comments format.

* Try not to omit `@param` declarations even if those seem to be obvious.
* Put `@remarks` part at the end of comment.
* Enclose code expressions into backticks ``.
* Enclose code examples into `` ```ts <code>``` `` blocks.
* Don't forget about `@throws`.

You may edit/add new **devDependencies**, but new **dependencies** are unwanted.

### Testing

#### Runtime
Write your tests in `/test` directory.
Add new file with the name that corresponds to the function/class you are testing.

#### Type definitions
Test your types in `/test/types-test.ts` file.

#### Mocks
Use/add mock data to `/test/helpers/mocks.ts`

