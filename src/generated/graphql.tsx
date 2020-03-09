import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type CreateTodoInput = {
  title: Scalars['String'],
};

export type Mutation = {
   __typename?: 'Mutation',
  createTodo: Todo,
};


export type MutationCreateTodoArgs = {
  input: CreateTodoInput
};

export type Query = {
   __typename?: 'Query',
  getTodoList?: Maybe<Array<Maybe<Todo>>>,
};

export type Todo = {
   __typename?: 'Todo',
  id: Scalars['ID'],
  title: Scalars['String'],
};

export type CreateTodoMutationVariables = {
  title: Scalars['String']
};


export type CreateTodoMutation = (
  { __typename?: 'Mutation' }
  & { createTodo: (
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title'>
  ) }
);

export type GetTodoListQueryVariables = {};


export type GetTodoListQuery = (
  { __typename?: 'Query' }
  & { getTodoList: Maybe<Array<Maybe<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'title'>
  )>>> }
);


export const CreateTodoDocument = gql`
    mutation CreateTodo($title: String!) {
  createTodo(input: {title: $title}) {
    id
    title
  }
}
    `;
export type CreateTodoMutationFn = ApolloReactCommon.MutationFunction<CreateTodoMutation, CreateTodoMutationVariables>;

/**
 * __useCreateTodoMutation__
 *
 * To run a mutation, you first call `useCreateTodoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTodoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTodoMutation, { data, loading, error }] = useCreateTodoMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateTodoMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateTodoMutation, CreateTodoMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateTodoMutation, CreateTodoMutationVariables>(CreateTodoDocument, baseOptions);
      }
export type CreateTodoMutationHookResult = ReturnType<typeof useCreateTodoMutation>;
export type CreateTodoMutationResult = ApolloReactCommon.MutationResult<CreateTodoMutation>;
export type CreateTodoMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateTodoMutation, CreateTodoMutationVariables>;
export const GetTodoListDocument = gql`
    query GetTodoList {
  getTodoList {
    id
    title
  }
}
    `;

/**
 * __useGetTodoListQuery__
 *
 * To run a query within a React component, call `useGetTodoListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTodoListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTodoListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTodoListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
        return ApolloReactHooks.useQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, baseOptions);
      }
export function useGetTodoListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetTodoListQuery, GetTodoListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<GetTodoListQuery, GetTodoListQueryVariables>(GetTodoListDocument, baseOptions);
        }
export type GetTodoListQueryHookResult = ReturnType<typeof useGetTodoListQuery>;
export type GetTodoListLazyQueryHookResult = ReturnType<typeof useGetTodoListLazyQuery>;
export type GetTodoListQueryResult = ApolloReactCommon.QueryResult<GetTodoListQuery, GetTodoListQueryVariables>;