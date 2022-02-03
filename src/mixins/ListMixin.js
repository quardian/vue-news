export default {
    // 재사용할 컴포넌트 옵션 
    created(){
        console.log('createListView::created', this);
        this.emitter.emit('start:spinner');
        const pagename = this.$route.name;
        this.FETCH_LIST(pagename)
        .then(()=>{
            this.emitter.emit('end:spinner');
        })
        .catch((err)=>{
            console.log(err);
        });
    },
}