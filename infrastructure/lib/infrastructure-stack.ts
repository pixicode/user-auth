import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';


export class UserAuthStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigateway.RestApi(this, 'userAuthApi', {
      restApiName: 'User Auth Service'
    });

    // The code that defines your stack goes here

    const dynamoTable = new dynamodb.Table(this, 'UserAuthTable', {
      partitionKey: {
        name: 'id',
        type: dynamodb.AttributeType.STRING
      },
      tableName: 'user_auth',

      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
      // the new table, and it will remain in your account until manually deleted. By setting the policy to 
      // DESTROY, cdk destroy will delete the table (even if it has data in it)
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    const userAuthLambda = new lambda.Function(this, 'userAuthFunction', {
      code: new lambda.AssetCode('lambda'),
      handler: 'user_auth_handler.sign_in',
      runtime: lambda.Runtime.PYTHON_3_7,
      environment: {
        TABLE_NAME: dynamoTable.tableName,
        PRIMARY_KEY: 'id'
      }
    });

    dynamoTable.grantReadWriteData(userAuthLambda);

    const items = api.root.addResource('auth');
    const signInIntegration = new apigateway.LambdaIntegration(userAuthLambda);
    items.addMethod('POST', signInIntegration);
  }
}
