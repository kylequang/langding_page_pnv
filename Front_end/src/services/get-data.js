import Call_API from "./CallAPI";
var get_data = async ($endpoint, $array) => {
    await Call_API($endpoint, "GET", null).then((db) => {
        $array = db.data;
    });
    return $array;
}
export default get_data;