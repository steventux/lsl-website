Laingsolutions.controllers :contents do

  get :index, :provides => [:html, :rss, :atom] do
    @contents = Content.all(:order => 'created_at desc')
    render 'contents/index'
  end

  get :show do
    @content = Content.find_by_id(params[:id])
    render 'contents/show'
  end
  
  get :show, :with => :path, :provides => :json do
    @contents = Content.where(:path => "/#{params[:path]}")
    @content = @contents.first
    render "contents/show"
  end

end
