@extends('layout')

@section('content')
    <head>
        <link rel="stylesheet" type="text/css" href="/css/for_blog.css">
    </head>

	@if ($errors->any())
		<div class="alert alert-danger">
			<div class="test">
				@foreach ($errors->all() as $error)
					<div class="tstf">{{ $error }}</div>
				@endforeach
			</div>
		</div>
	@endif
    
    <form class="guestform" method="post" name="guestform" action="/blog/uploadArticles" enctype="multipart/form-data">
        @csrf
        <input type="hidden" name="_token" value="{{ csrf_token() }}" />
        
        <div class="twoinp">
            <input type="file" name="articles" value="{{ old('articles') }}">
        </div>

        <button type="submit">Отправить!</button>

    </form>
@endsection
