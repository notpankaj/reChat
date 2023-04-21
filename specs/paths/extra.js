module.exports = [
  {
    url: "/saveReservation",
    post: {
      summary: "saveReservation",
      description: "saveReservation",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "model of extra",
          required: true,
          schema: {
            $ref: "#/definitions/saveReservation",
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
  {
    url: "/getReservations",
    get: {
      summary: "getReservations",
      description: "getReservations",
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
  {
    url: "/deleteAllReservations",
    delete: {
      summary: "deleteAllReservations",
      description: "deleteAllReservations",
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
  {
    url: "/deleteReservation/{id}",
    delete: {
      summary: "deleteReservation",
      description: "deleteReservation",
      parameters: [
        {
          in: "path",
          type: "id",
          name: "id",
          description: "id",
          required: true,
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
