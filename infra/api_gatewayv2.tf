resource "aws_apigatewayv2_api" "exampleAPI" {
    name = "exampleAPI_lambda"
    protocol_type = "HTTP"
    cors_configuration {
      allow_headers     = ["Content-Type"]
      allow_methods     = ["*"]
      allow_origins     = ["*"]
      expose_headers = ["*"]
      max_age           = 300
  }

}

resource "aws_apigatewayv2_stage" "exampleStage" {
    api_id = aws_apigatewayv2_api.exampleAPI.id
    name = "exampleStage"
    auto_deploy = true
}

resource "aws_apigatewayv2_integration" "exampleIntergration" {
    api_id = aws_apigatewayv2_api.exampleAPI.id

    integration_uri = aws_lambda_function.lambda_function.invoke_arn
    integration_type = "AWS_PROXY"
    integration_method = "POST"
}


resource "aws_apigatewayv2_route" "exampleRoute" {
    api_id = aws_apigatewayv2_api.exampleAPI.id
    route_key = "GET /VistorsCounter"
    target = "integrations/${aws_apigatewayv2_integration.exampleIntergration.id}"
}


resource "aws_lambda_permission" "examplePermission" {
    statement_id = "AllowExecutionFromAPIGateway"
    action = "lambda:InvokeFunction"
    function_name = aws_lambda_function.lambda_function.function_name
    principal = "apigateway.amazonaws.com"

    source_arn = "${aws_apigatewayv2_api.exampleAPI.execution_arn}/*/*"
    
  
}

output "base_url" {
    value = "${aws_apigatewayv2_stage.exampleStage.invoke_url}/VistorsCounter"
}