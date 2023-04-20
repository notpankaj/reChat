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
          description: "model of register user",
          required: true,
          schema: {
            $ref: "#/definitions/userCreate",
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
    url: "/login",
    post: {
      summary: "login",
      description: "login",
      parameters: [
        {
          in: "body",
          name: "body",
          description: "Model of user login",
          required: true,
          schema: {
            $ref: "#/definitions/login",
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
    url: "/resetPassword/{id}",
    put: {
      summary: "reset Password ",
      description: "reset Password",
      parameters: [
        {
          in: "header",
          name: "x-access-token",
          description: "token to access api",
          required: true,
          type: "string",
        },
        {
          in: "path",
          name: "id",
          description: "user id",
          required: true,
          type: "string",
        },

        {
          in: "body",
          name: "body",
          description: "Model of resetPassword ",
          required: true,
          schema: {
            $ref: "#/definitions/resetPassword",
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
    url: "/profileImageUpload/{id}",
    put: {
      summary: "upload Profile Pic ",
      description: "upload Profile Pic ",
      parameters: [
        {
          in: "formData",
          name: "image",
          type: "file",
          description: "The file to upload.",
          required: true,
        },
        // {
        //     in: "header",
        //     name: "x-access-token",
        //     description: "token to access api",
        //     required: true,
        //     type: "string"
        // },
        {
          in: "path",
          type: "string",
          name: "id",
          description: "user id",
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
  {
    url: "/removeProfilePic/{id}",
    put: {
      summary: "remove Profile",
      description: "remove Profile Pic by userId ",
      parameters: [
        //     {
        //     in: "formData",
        //     name: "image",
        //     type: "file",
        //     description: "The file to upload.",
        //     required: true,
        // },
        {
          in: "header",
          name: "x-access-token",
          description: "token to access api",
          required: true,
          type: "string",
        },
        {
          in: "path",
          type: "string",
          name: "id",
          description: "user id",
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
  {
    url: "/getUsers",
    get: {
      summary: "get user list",
      description: "get  user list",
      parameters: [
        {
          in: "header",
          name: "x-access-token",
          description: "token to access api",
          required: true,
          type: "string",
        },
        {
          in: "query",
          type: "integer",
          name: "pageNo",
          description: "pageNo",
          required: true,
        },
        {
          in: "query",
          type: "integer",
          name: "pageSize",
          description: "pageSize",
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
  {
    url: "/logout",
    post: {
      summary: "logout",
      description: "logout",
      parameters: [
        {
          in: "header",
          name: "x-access-token",
          description: "token to access api",
          required: true,
          type: "string",
        },
        // {
        //     in: "body",
        //     name: "body",
        //     description: "Model of user logout",
        //     required: true,
        //     schema: {
        //         $ref: "#/definitions/login"
        //     }
        // }
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
    url: "/deleteAccount/{id}",
    delete: {
      summary: "deleteAccount",
      description: "deleteAccount",
      parameters: [
        {
          in: "header",
          name: "x-access-token",
          description: "token to access api",
          required: true,
          type: "string",
        },
        {
          in: "path",
          type: "string",
          name: "id",
          description: "user id",
          required: true,
        },
        // {
        //     in: "body",
        //     name: "body",
        //     description: "Model of user logout",
        //     required: true,
        //     schema: {
        //         $ref: "#/definitions/login"
        //     }
        // }
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
    url: "/userByUsername",
    get: {
      summary: "userByUsername",
      description: "userByUsername",
      parameters: [
        {
          in: "query",
          type: "string",
          name: "username",
          description: "username",
          required: true,
        },
        {
          in: "pageNo",
          type: "string",
          name: "pageNo",
          description: "pageNo",
          required: true,
        },
        {
          in: "query",
          type: "string",
          name: "pageSize",
          description: "pageSize",
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
