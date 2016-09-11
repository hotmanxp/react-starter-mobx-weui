import { observable } from 'mobx';
import { newhandListData} from './mockData';

class NewhandArticle {
	@observable articleList = [];
	
	
	

	getArticleList(){
		this.articleList = newhandListData;
	}


   constructor(){
      this.getArticleList();
   }
}


export default NewhandArticle;