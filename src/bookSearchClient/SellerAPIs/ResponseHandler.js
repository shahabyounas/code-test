

export {
    responseFactory
}


async function responseFactory(type = 'json', data){
    switch(type) {
        case 'xml':{
            const resolveResp = await data.text()
            const jsonData = JSON.parse(xmlToJson(resolveResp))
            return jsonData['data']
        }
        case 'json':{
            const resolveResp = await data.json()
            return resolveResp
            }
        default:
            return new Error('Invalid data type')
    }

}

class ResponseHandler {

    constructor(){
       if(this.constructor === ResponseHandler){
           throw new Error('Abstract class can not be instantiated')
       }
    }
   parse(data) {

   }
}


class XMLHandler extends ResponseHandler {

    // Implement xml parser
    
    parse(data){
        // parser implementation
        return data
    }

}

class JSONHandler extends ResponseHandler {

       // Implement json parser
    
       parse(data){
        // parser implementation
        return data
    }

}

function xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
			}
		}
	}
	return obj;
};