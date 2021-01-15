/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type QuestionType = "IMAGE" | "TEXT" | "%future added value";
export type GetQuestionsQueryVariables = {};
export type GetQuestionsQueryResponse = {
    readonly getQuestions: ReadonlyArray<{
        readonly id: string | null;
        readonly question: string;
        readonly questionNo: number;
        readonly questionAssets: string | null;
        readonly questionType: QuestionType;
    }>;
};
export type GetQuestionsQuery = {
    readonly response: GetQuestionsQueryResponse;
    readonly variables: GetQuestionsQueryVariables;
};



/*
query GetQuestionsQuery {
  getQuestions {
    id
    question
    questionNo
    questionAssets
    questionType
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Question",
    "kind": "LinkedField",
    "name": "getQuestions",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "question",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionNo",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionAssets",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "questionType",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GetQuestionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GetQuestionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0e5059534d508fd42dfa4a676c905181",
    "id": null,
    "metadata": {},
    "name": "GetQuestionsQuery",
    "operationKind": "query",
    "text": "query GetQuestionsQuery {\n  getQuestions {\n    id\n    question\n    questionNo\n    questionAssets\n    questionType\n  }\n}\n"
  }
};
})();
(node as any).hash = '469d0842be6193e176755dec48998e28';
export default node;
