import json


def sign_in(event, context):

    response_body = {"token": "kanyewest"}

    return {
        "statusCode": 200, 
        "body": json.dumps(response_body)
    }
