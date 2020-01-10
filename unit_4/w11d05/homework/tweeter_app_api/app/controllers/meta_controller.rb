class MetaController < ApplicationController
    def about
        render json: { author: "Me!", last_updated: "1 Jan 2222" }
    end        
end