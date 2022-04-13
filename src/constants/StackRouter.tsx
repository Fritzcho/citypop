import { NavigationProp, ParamListBase } from "@react-navigation/native";

export interface StackRouter {
    navigation: NavigationProp<ParamListBase>
}

export interface StackRouterWParams {
    navigation: NavigationProp<ParamListBase>,
    input: string
}