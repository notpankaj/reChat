module.exports = [
  {
    url: "/create",
    post: {
      summary: "create",
      description: "create",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "model of register followReq",
          required: true,
          schema: {
            $ref: "#/definitions/followReqCreate",
          },
        },
      ],
      responses: {
        default: {
          description: "Unexpected error",
          schema: {
            $ref: "#/definitions/Error",
          },
        },
      },
    },
  },
];
